import React from 'react'
import { Shield, Zap, Users, Award, Lock, Globe } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '区块链安全保障',
      description: '所有翻译记录和医疗信息都通过区块链技术加密存储，确保数据安全和隐私保护。',
      color: 'blue'
    },
    {
      icon: Zap,
      title: '实时智能匹配',
      description: '基于AI算法快速匹配最适合的翻译员，平均响应时间少于30秒。',
      color: 'green'
    },
    {
      icon: Users,
      title: '专业翻译团队',
      description: '所有翻译员都经过严格认证，具备医疗手语翻译专业资质和丰富经验。',
      color: 'purple'
    },
    {
      icon: Award,
      title: '质量评价体系',
      description: '完善的评价和激励机制，确保翻译服务质量，建立可信的服务生态。',
      color: 'orange'
    },
    {
      icon: Lock,
      title: '隐私保护',
      description: '采用端到端加密技术，医患沟通内容完全保密，符合医疗隐私法规。',
      color: 'red'
    },
    {
      icon: Globe,
      title: '全球服务网络',
      description: '覆盖全球主要城市，支持多种手语方言，让世界各地的患者都能获得帮助。',
      color: 'indigo'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            为什么选择 SignBridge？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们结合最新的区块链技术和专业的医疗手语翻译服务，为聋哑患者提供安全、高效、可信的医疗沟通解决方案。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 group"
            >
              <div className={`inline-flex p-3 rounded-xl ${getColorClasses(feature.color)} mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
