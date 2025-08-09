// src/auth/AuthContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type User = { name: string; email: string }
type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  login: (u: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('auth:user')
    if (raw) setUser(JSON.parse(raw))
  }, [])

  const login = (u: User) => {
    setUser(u)
    localStorage.setItem('auth:user', JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth:user')
  }

  const value = useMemo(() => ({
    isAuthenticated: !!user,
    user,
    login,
    logout,
  }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
