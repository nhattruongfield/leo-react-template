// src/pages/Settings.tsx
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
} from '@coreui/react'

const Settings: React.FC = () => (
  <CCard>
    <CCardHeader>
      <strong>Cài đặt</strong>
    </CCardHeader>
    <CCardBody>
      <CForm className="row g-3">
        <div className="col-md-6">
          <CFormLabel htmlFor="siteName">Tên hệ thống</CFormLabel>
          <CFormInput id="siteName" placeholder="My App" />
        </div>
        <div className="col-12">
          <CButton color="primary" type="submit">
            Lưu
          </CButton>
        </div>
      </CForm>
    </CCardBody>
  </CCard>
)

export default Settings
