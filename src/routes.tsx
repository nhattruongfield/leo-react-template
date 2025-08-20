import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './auth/ProtectedRoute'
import Settings from './pages/Settings'
import Profile from './pages/account/Profile'
import Login from './pages/auth/Login'
import React from 'react'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Home = React.lazy(() => import('./pages/Home'))
export default function AppRoutes() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/management/*"
            element={
              <ProtectedRoute>
                <DefaultLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
    // <Routes>
    //   <Route path="/login" element={<Login />} />
    //   <Route
    //     element={
    //       <ProtectedRoute>
    //         <DefaultLayout />
    //       </ProtectedRoute>
    //     }
    //   >
    //     <Route index element={<Home />} />
    //     <Route path="settings" element={<Settings />} />
    //     <Route path="account/profile" element={<Profile />} />
    //   </Route>
    //   {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    // </Routes>
  )
}
