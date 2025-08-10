import React from 'react'
import { Play, Shield, Globe, Users } from 'lucide-react'

interface HeroProps {
  onNavigate: (view: 'home' | 'translator' | 'patient') => void
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>区块链技术保障</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                连接无声世界与
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  医疗关怀
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                SignBridge 是首个基于区块链技术的手语医疗翻译平台，为聋哑患者提供专业、安全、透明的医疗翻译服务，让每个人都能享受平等的医疗权利。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('patient')}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>立即寻求帮助</span>
              </button>
              <button
                onClick={() => onNavigate('translator')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>成为翻译员</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2,847</div>
                <div className="text-sm text-gray-600">注册患者</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">456</div>
                <div className="text-sm text-gray-600">认证翻译员</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">12,394</div>
                <div className="text-sm text-gray-600">成功翻译</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="医生与患者沟通"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">实时翻译</div>
                    <div className="text-sm text-gray-600">24/7 在线服务</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-xl shadow-lg z-20">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
