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
