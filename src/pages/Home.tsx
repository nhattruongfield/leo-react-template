// src/pages/Home.tsx
import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'

const Home: React.FC = () => (
  <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader className="d-flex align-items-center">
          <CIcon icon={cilSpeedometer} className="me-2" />
          <strong>Dashboard</strong>
        </CCardHeader>
        <CCardBody>
          <p>Chào mừng bạn đến dashboard.</p>
          <CButton color="primary">Action</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
)

export default Home
