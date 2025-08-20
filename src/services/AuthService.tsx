// src/services/AuthService.ts
import axios, { type AxiosInstance } from 'axios'

// Kiểu dữ liệu request và response
export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  expiresIn: number
  userName: string
}

// Khởi tạo instance axios
const api: AxiosInstance = axios.create({
  baseURL: 'https://localhost:44337/api',   // Thay URL API của bạn
  headers: { 'Content-Type': 'application/json' },
})

// Request interceptor: tự động đính Authorization header nếu có token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export async function login(req: LoginRequest): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/Account/login', req)
  return data
}

export default api
