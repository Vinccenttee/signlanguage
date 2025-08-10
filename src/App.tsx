import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TranslatorDashboard from './components/TranslatorDashboard'
import PatientDashboard from './components/PatientDashboard'
import Footer from './components/Footer'

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'translator' | 'patient'>('home')

  const renderCurrentView = () => {
    switch (currentView) {
      case 'translator':
        return <TranslatorDashboard onBack={() => setCurrentView('home')} />
      case 'patient':
        return <PatientDashboard onBack={() => setCurrentView('home')} />
      default:
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <Features />
            <HowItWorks />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      {renderCurrentView()}
      {currentView === 'home' && <Footer />}
    </div>
  )
}

export default App
