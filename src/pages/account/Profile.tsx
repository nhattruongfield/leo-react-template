// src/pages/account/Profile.tsx
import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { useAuth } from '../../auth/AuthContext'

const Profile: React.FC = () => {
  const { user } = useAuth()
  return (
    <CCard>
      <CCardHeader><strong>Hồ sơ</strong></CCardHeader>
      <CCardBody>
        <p><b>Tên:</b> {user?.name}</p>
        <p><b>Email:</b> {user?.email}</p>
      </CCardBody>
    </CCard>
  )
}

export default Profile
