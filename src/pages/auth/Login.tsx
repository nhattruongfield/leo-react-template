// src/pages/auth/Login.tsx
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import {
  CCard, CCardBody, CCardHeader,
  CForm, CFormInput, CFormLabel, CButton,
} from '@coreui/react'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation() as any
  const from = location.state?.from?.pathname || '/'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login({ username, password })
      navigate(from, { replace: true })
    } catch (err: any) {
      setError(err.response?.data?.message || 'Đăng nhập thất bại')
    }
  }

  return (
    <CCard className="mx-auto" style={{ maxWidth: 400 }}>
      <CCardHeader><strong>Đăng nhập</strong></CCardHeader>
      <CCardBody>
        {error && <div className="text-danger mb-2">{error}</div>}
        <CForm onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
            <CFormLabel>Email</CFormLabel>
            <CFormInput
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <CFormLabel>Mật khẩu</CFormLabel>
            <CFormInput
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <CButton color="primary" type="submit" className="w-100">
              Đăng nhập
            </CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  )
}
