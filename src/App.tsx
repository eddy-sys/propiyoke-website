import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatBar from './components/StatBar'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <>
      {/* Background orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-violet" />
        <div className="orb orb-teal" />
        <div className="orb orb-violet-dim" />
      </div>

      {/* Cursor glow */}
      <CursorGlow />

      {/* Page */}
      <Navbar />
      <main>
        <Hero />
        <StatBar />
        <Features />
        <SocialProof />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
