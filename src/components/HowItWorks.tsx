import React from 'react'
import { Search, UserCheck, MessageSquare, Star } from 'lucide-react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: '发起翻译请求',
      description: '患者在医院或诊所通过平台发起手语翻译请求，描述医疗场景和需求。',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: UserCheck,
      title: '智能匹配翻译员',
      description: '系统基于地理位置、专业领域和可用时间，快速匹配最合适的认证翻译员。',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: MessageSquare,
      title: '实时翻译服务',
      description: '翻译员通过视频通话提供实时手语翻译，确保医患之间的有效沟通。',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Star,
      title: '服务评价与结算',
      description: '翻译完成后，患者对服务进行评价，系统通过区块链智能合约自动结算费用。',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            工作原理
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            简单四步，让聋哑患者轻松获得专业的医疗手语翻译服务
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-3 rounded-xl">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    步骤 {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-2xl shadow-xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
