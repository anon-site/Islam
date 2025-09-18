import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'الخطة الأساسية',
      description: 'مثالية للمبتدئين والمشاريع الصغيرة',
      price: 'مجاناً',
      period: 'للأبد',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        'وصول كامل للمنصة',
        'دعم فني عبر البريد الإلكتروني',
        'قوالب أساسية',
        'تخزين 1GB',
        'نشر مشروع واحد',
        'أدوات التطوير الأساسية'
      ]
    },
    {
      name: 'الخطة المتقدمة',
      description: 'الأفضل للمطورين المحترفين',
      price: '29',
      period: 'شهرياً',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'كل مميزات الخطة الأساسية',
        'دعم فني أولوية',
        'قوالب متقدمة',
        'تخزين 10GB',
        'نشر مشاريع غير محدود',
        'أدوات التطوير المتقدمة',
        'تحليلات مفصلة',
        'تكامل مع خدمات خارجية'
      ]
    },
    {
      name: 'الخطة المؤسسية',
      description: 'للشركات والمؤسسات الكبيرة',
      price: '99',
      period: 'شهرياً',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      features: [
        'كل مميزات الخطة المتقدمة',
        'دعم فني مخصص 24/7',
        'قوالب مخصصة',
        'تخزين غير محدود',
        'نشر على خوادم مخصصة',
        'أدوات التطوير الاحترافية',
        'تحليلات متقدمة',
        'تكامل كامل مع جميع الخدمات',
        'إدارة الفرق والمستخدمين',
        'أمان متقدم'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            خطط الأسعار
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            اختر الخطة التي تناسب احتياجاتك وابدأ رحلتك نحو التطوير المتقدم
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    الأكثر شعبية
                  </span>
                </div>
              )}
              
              <div className={`card h-full ${plan.popular ? 'ring-2 ring-purple-500 shadow-xl' : ''}`}>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline justify-center space-x-1 space-x-reverse">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                        {plan.price !== 'مجاناً' && (
                          <span className="text-gray-600 dark:text-gray-400">$</span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.period}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 space-x-reverse">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105' 
                        : 'btn-secondary hover:bg-primary-50 hover:text-primary-600'
                    }`}>
                      {plan.price === 'مجاناً' ? 'ابدأ مجاناً' : 'اختر هذه الخطة'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            أسئلة شائعة حول الأسعار
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            <div className="text-right space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">هل يمكنني تغيير خطتي لاحقاً؟</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت حسب احتياجاتك.</p>
            </div>
            <div className="text-right space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">هل هناك فترة تجريبية؟</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">نعم، جميع الخطط المدفوعة تأتي مع فترة تجريبية مجانية لمدة 14 يوماً.</p>
            </div>
            <div className="text-right space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">ما هي طرق الدفع المتاحة؟</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">نقبل جميع البطاقات الائتمانية الرئيسية وPayPal.</p>
            </div>
            <div className="text-right space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">هل يمكنني إلغاء الاشتراك؟</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">نعم، يمكنك إلغاء اشتراكك في أي وقت بدون رسوم إضافية.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
