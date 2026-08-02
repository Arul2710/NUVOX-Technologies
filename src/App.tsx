import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { scrollToId, scrollToTop } from './lib/scroll'
import { Loader } from './components/layout/Loader'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { FloatingContact } from './components/layout/FloatingContact'
import { CookieConsent } from './components/layout/CookieConsent'
import { BackToTop } from './components/layout/BackToTop'
import { PageTransition } from './components/layout/PageTransition'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Careers from './pages/Careers'
import Blog from './pages/Blog'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    scrollToTop(true)
  }, [pathname])

  useEffect(() => {
    if (!hash) return
    const t = window.setTimeout(() => {
      scrollToId(hash.replace('#', ''))
    }, 120)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  return null
}

function AppShell() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </PageTransition>
      <Footer />
      <FloatingContact />
      <BackToTop />
      <CookieConsent />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <AppShell />
    </>
  )
}
