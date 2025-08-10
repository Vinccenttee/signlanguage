import React from 'react'
import { Heart, Users, ArrowLeft } from 'lucide-react'

interface HeaderProps {
  currentView: 'home' | 'translator' | 'patient'
  onNavigate: (view: 'home' | 'translator' | 'patient') => void
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            {currentView !== 'home' && (
              <button
                onClick={() => onNavigate('home')}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
            )}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                SignBridge
              </span>
            </div>
          </div>

          {currentView === 'home' && (
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                功能特色
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                工作原理
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                关于我们
              </a>
            </nav>
          )}

          <div className="flex items-center space-x-4">
            {currentView === 'home' && (
              <>
                <button
                  onClick={() => onNavigate('translator')}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  翻译员入口
                </button>
                <button
                  onClick={() => onNavigate('patient')}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  患者入口
                </button>
              </>
            )}
            {currentView !== 'home' && (
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>在线用户: 1,247</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
