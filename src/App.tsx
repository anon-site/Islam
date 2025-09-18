import { motion } from 'framer-motion'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import Newsletter from './components/sections/Newsletter'
import FAQ from './components/sections/FAQ'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
