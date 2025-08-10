import React, { useState } from 'react'
import { 
  Heart, 
  Search, 
  MapPin, 
  Clock, 
  Star, 
  Video, 
  MessageSquare,
  User,
  Calendar,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Phone
} from 'lucide-react'

interface PatientDashboardProps {
  onBack: () => void
}

const PatientDashboard: React.FC<PatientDashboardProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState<'request' | 'matching' | 'connected' | 'completed'>('request')
  const [selectedHospital, setSelectedHospital] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [urgency, setUrgency] = useState('medium')

  const hospitals = [
    '北京协和医院',
    '北京大学第一医院',
    '清华大学附属医院',
    '北京天坛医院',
    '北京安贞医院'
  ]

  const departments = [
    '内科',
    '外科',
    '妇科',
    '儿科',
    '骨科',
    '心内科',
    '神经科',
    '眼科',
    '耳鼻喉科',
    '皮肤科'
  ]

  const matchedTranslator = {
    name: '李明',
    rating: 4.9,
    completedTranslations: 156,
    specialties: ['内科', '心内科'],
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    estimatedArrival: '5分钟',
    fee: '¥120'
  }

  const renderRequestForm = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-16 h-16 mx-auto">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">寻求手语翻译帮助</h1>
        <p className="text-lg text-gray-600">请填写以下信息，我们将为您匹配最合适的翻译员</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">选择医院</label>
          <select
            value={selectedHospital}
            onChange={(e) => setSelectedHospital(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">请选择医院</option>
            {hospitals.map((hospital) => (
              <option key={hospital} value={hospital}>{hospital}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">选择科室</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">请选择科室</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">紧急程度</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'low', label: '不急', color: 'green' },
              { value: 'medium', label: '一般', color: 'yellow' },
              { value: 'high', label: '紧急', color: 'red' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setUrgency(option.value)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  urgency === option.value
                    ? `border-${option.color}-500 bg-${option.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-${option.color}-500 mx-auto mb-2`}></div>
                <span className="font-medium text-gray-900">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">补充说明（可选）</label>
          <textarea
            rows={4}
            placeholder="请描述您的具体需求或特殊情况..."
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <button
          onClick={() => setCurrentStep('matching')}
          disabled={!selectedHospital || !selectedDepartment}
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          寻找翻译员
        </button>
      </div>
    </div>
  )

  const renderMatching = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-16 h-16 mx-auto animate-pulse">
            <Search className="h-8 w-8 text-white" />
          </div>
          <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20"></div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">正在为您匹配翻译员</h1>
        <p className="text-lg text-gray-600">请稍候，我们正在寻找最合适的专业翻译员</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-900">{selectedHospital}</span>
            </div>
            <span className="text-sm text-blue-600">{selectedDepartment}</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700">正在搜索附近的翻译员...</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">找到 3 位符合条件的翻译员</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700">正在匹配最佳翻译员...</span>
            </div>
          </div>

          <div className="pt-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">预计等待时间：30秒</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setCurrentStep('connected')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          模拟匹配成功
        </button>
      </div>
    </div>
  )

  const renderConnected = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">翻译员已连接</h1>
        <p className="text-lg text-gray-600">您的专属翻译员已准备就绪</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Translator Info */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <div className="text-center space-y-4">
            <img
              src={matchedTranslator.avatar}
              alt={matchedTranslator.name}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{matchedTranslator.name}</h3>
              <div className="flex items-center justify-center space-x-1 mt-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium text-gray-900">{matchedTranslator.rating}</span>
                <span className="text-sm text-gray-600">({matchedTranslator.completedTranslations}次翻译)</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">预计到达：{matchedTranslator.estimatedArrival}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CreditCard className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">费用：{matchedTranslator.fee}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {matchedTranslator.specialties.map((specialty) => (
                <span key={specialty} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Video Call Interface */}
        <div className="lg:col-span-2 bg-gray-900 rounded-2xl overflow-hidden relative">
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Video className="h-16 w-16 text-gray-400 mx-auto" />
              <p className="text-white text-lg">视频通话准备中...</p>
              <p className="text-gray-400">翻译员正在连接</p>
            </div>
          </div>
          
          {/* Call Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors">
              <Phone className="h-6 w-6 text-white" />
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 p-3 rounded-full transition-colors">
              <Video className="h-6 w-6 text-white" />
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 p-3 rounded-full transition-colors">
              <MessageSquare className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">翻译服务进行中</p>
              <p className="text-sm text-gray-600">开始时间：14:30 | 已用时：00:05:23</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep('completed')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            结束翻译
          </button>
        </div>
      </div>
    </div>
  )

  const renderCompleted = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">翻译服务已完成</h1>
        <p className="text-lg text-gray-600">感谢您使用 SignBridge 服务</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6">
        <div className="text-center space-y-4">
          <img
            src={matchedTranslator.avatar}
            alt={matchedTranslator.name}
            className="w-16 h-16 rounded-full mx-auto"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{matchedTranslator.name}</h3>
            <p className="text-gray-600">为您提供了专业的翻译服务</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-600">服务时长</p>
            <p className="text-lg font-semibold text-gray-900">25分钟</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">服务费用</p>
            <p className="text-lg font-semibold text-green-600">¥100</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">请为本次服务评分</h4>
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} className="p-1">
                <Star className="h-8 w-8 text-yellow-400 fill-current hover:scale-110 transition-transform" />
              </button>
            ))}
          </div>
          <textarea
            rows={3}
            placeholder="请分享您的使用体验（可选）"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            提交评价
          </button>
          <button
            onClick={() => setCurrentStep('request')}
            className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            再次寻求帮助
          </button>
        </div>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'matching': return renderMatching()
      case 'connected': return renderConnected()
      case 'completed': return renderCompleted()
      default: return renderRequestForm()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderCurrentStep()}
      </div>
    </div>
  )
}

export default PatientDashboard
