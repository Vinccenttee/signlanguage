import React, { useState } from 'react'
import { 
  User, 
  Star, 
  Clock, 
  DollarSign, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  Award,
  TrendingUp
} from 'lucide-react'

interface TranslatorDashboardProps {
  onBack: () => void
}

const TranslatorDashboard: React.FC<TranslatorDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'requests' | 'history' | 'profile'>('dashboard')

  const stats = [
    { label: '本月收入', value: '¥12,450', icon: DollarSign, color: 'green' },
    { label: '完成翻译', value: '89', icon: CheckCircle, color: 'blue' },
    { label: '平均评分', value: '4.9', icon: Star, color: 'yellow' },
    { label: '在线时长', value: '156h', icon: Clock, color: 'purple' }
  ]

  const pendingRequests = [
    {
      id: 1,
      patient: '张女士',
      hospital: '北京协和医院',
      department: '心内科',
      urgency: 'high',
      estimatedDuration: '45分钟',
      fee: '¥180'
    },
    {
      id: 2,
      patient: '李先生',
      hospital: '上海华山医院',
      department: '骨科',
      urgency: 'medium',
      estimatedDuration: '30分钟',
      fee: '¥120'
    },
    {
      id: 3,
      patient: '王女士',
      hospital: '广州中山医院',
      department: '妇科',
      urgency: 'low',
      estimatedDuration: '60分钟',
      fee: '¥200'
    }
  ]

  const recentHistory = [
    {
      id: 1,
      patient: '陈先生',
      date: '2024-01-15',
      duration: '35分钟',
      rating: 5,
      fee: '¥140',
      status: 'completed'
    },
    {
      id: 2,
      patient: '刘女士',
      date: '2024-01-14',
      duration: '50分钟',
      rating: 5,
      fee: '¥200',
      status: 'completed'
    },
    {
      id: 3,
      patient: '赵先生',
      date: '2024-01-13',
      duration: '25分钟',
      rating: 4,
      fee: '¥100',
      status: 'completed'
    }
  ]

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'high': return '紧急'
      case 'medium': return '一般'
      case 'low': return '不急'
      default: return '未知'
    }
  }

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Calendar className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">设置工作时间</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <Award className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">查看认证状态</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <TrendingUp className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">收入统计</p>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">最近活动</h3>
        <div className="space-y-4">
          {recentHistory.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.patient}</p>
                  <p className="text-sm text-gray-600">{item.date} · {item.duration}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{item.fee}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderRequests = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">待接受的翻译请求</h3>
        <div className="space-y-4">
          {pendingRequests.map((request) => (
            <div key={request.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{request.patient}</h4>
                    <p className="text-sm text-gray-600">{request.hospital} · {request.department}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
                  {getUrgencyText(request.urgency)}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">预计时长</p>
                  <p className="font-medium text-gray-900">{request.estimatedDuration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">翻译费用</p>
                  <p className="font-medium text-green-600">{request.fee}</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  接受请求
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  查看详情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderHistory = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">翻译历史</h3>
      <div className="space-y-4">
        {recentHistory.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{item.patient}</p>
                <p className="text-sm text-gray-600">{item.date} · {item.duration}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{item.fee}</p>
              <div className="flex items-center space-x-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">个人信息</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
            <input
              type="text"
              defaultValue="李明"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
            <input
              type="tel"
              defaultValue="138****5678"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">专业领域</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>内科</option>
              <option>外科</option>
              <option>妇科</option>
              <option>儿科</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">工作城市</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>北京</option>
              <option>上海</option>
              <option>广州</option>
              <option>深圳</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            保存更改
          </button>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'requests': return renderRequests()
      case 'history': return renderHistory()
      case 'profile': return renderProfile()
      default: return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-xl">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">翻译员工作台</h1>
                <p className="text-gray-600">欢迎回来，李明</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">在线状态</p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">在线</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-200 mb-8">
          <nav className="flex space-x-2">
            {[
              { id: 'dashboard', label: '工作台', icon: TrendingUp },
              { id: 'requests', label: '翻译请求', icon: MessageSquare },
              { id: 'history', label: '历史记录', icon: Clock },
              { id: 'profile', label: '个人设置', icon: User }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  )
}

export default TranslatorDashboard
