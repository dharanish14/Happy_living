import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { DisclosuresPage } from './pages/DisclosuresPage'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { InvestmentCharterPage } from './pages/InvestmentCharterPage'
import { VisionMissionPage } from './pages/VisionMissionPage'
import { BlogsPage } from './pages/BlogsPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { AdminBlogsPage } from './pages/AdminBlogsPage'
import { AdminLoginPage } from './pages/AdminLoginPage'
import { RequireAdminAuth } from './components/RequireAdminAuth'
import { initEmailJS } from './services/emailService'

function App() {
  useEffect(() => {
    initEmailJS()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vision-mission" element={<VisionMissionPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:slug" element={<BlogDetailPage />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route element={<RequireAdminAuth />}>
            <Route path="admin" element={<AdminBlogsPage />} />
            <Route path="admin/blogs" element={<AdminBlogsPage />} />
          </Route>
          <Route path="disclosures" element={<DisclosuresPage />} />
          <Route path="investment-charter" element={<InvestmentCharterPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
