// src/auth/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { login, type LoginRequest } from '../services/AuthService'

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (req: LoginRequest) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const rawUser = localStorage.getItem('auth_user')
    if (rawUser) {
      setUser(JSON.parse(rawUser))
    }
  }, [])

  const loginHandler = async (req: LoginRequest) => {
    const res = await login(req)
    // Lưu token và user vào localStorage
    localStorage.setItem('auth_token', res.token)
    const u: User = { name: res.userName, email: req.username }
    localStorage.setItem('auth_user', JSON.stringify(u))
    setUser(u)
  }
  
  const logout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login: loginHandler,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return ctx
}
