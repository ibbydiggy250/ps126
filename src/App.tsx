import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { PageLoader } from './components/PageLoader'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Programs } from './pages/Programs'
import { Staff } from './pages/Staff'
import { Parents } from './pages/Parents'
import { News } from './pages/News'
import './App.css'

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<PageLoader><Home /></PageLoader>} />
            <Route path="/about" element={<PageLoader><About /></PageLoader>} />
            <Route path="/programs" element={<PageLoader><Programs /></PageLoader>} />
            <Route path="/staff" element={<PageLoader><Staff /></PageLoader>} />
            <Route path="/parents" element={<PageLoader><Parents /></PageLoader>} />
            <Route path="/news" element={<PageLoader><News /></PageLoader>} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
