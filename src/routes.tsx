import { Routes, Route, Navigate } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import ProtectedRoute from './auth/ProtectedRoute'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Profile from './pages/account/Profile'
import Login from './pages/auth/Login'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <ProtectedRoute>
            <DefaultLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
