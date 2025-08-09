// src/pages/auth/Login.tsx
import React from 'react'
import { CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'
import { useAuth } from '../../auth/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation() as any
  const from = location.state?.from?.pathname || '/'

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    login({ name: 'Truong', email: 'truong@example.com' })
    navigate(from, { replace: true })
  }

  return (
    <CCard className="mx-auto" style={{ maxWidth: 480 }}>
      <CCardHeader><strong>Đăng nhập</strong></CCardHeader>
      <CCardBody>
        <CForm onSubmit={onSubmit} className="row g-3">
          <div className="col-12">
            <CFormLabel>Email</CFormLabel>
            <CFormInput type="email" required />
          </div>
          <div className="col-12">
            <CFormLabel>Mật khẩu</CFormLabel>
            <CFormInput type="password" required />
          </div>
          <div className="col-12">
            <CButton color="primary" type="submit" className="w-100">Đăng nhập</CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default Login
