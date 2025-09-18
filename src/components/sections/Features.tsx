import { motion } from 'framer-motion'
import { Zap, Shield, Globe, Code, Palette, Rocket } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'أداء فائق السرعة',
      description: 'تقنيات متقدمة لتحقيق أسرع أوقات التحميل والأداء الأمثل',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'أمان متقدم',
      description: 'حماية شاملة مع أحدث معايير الأمان والخصوصية',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'متوافق عالمياً',
      description: 'يعمل بشكل مثالي على جميع الأجهزة والمتصفحات',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Code,
      title: 'كود نظيف',
      description: 'معايير تطوير عالية مع كود منظم وقابل للصيانة',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Palette,
      title: 'تصميم حديث',
      description: 'واجهات مستخدم جميلة ومتجاوبة مع أحدث الاتجاهات',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Rocket,
      title: 'نشر سريع',
      description: 'أدوات نشر متطورة لوصول أسرع للسوق',
      color: 'from-red-400 to-pink-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            مميزات متطورة
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            اكتشف التقنيات والأدوات التي تجعل تطوير الويب أسرع وأسهل وأكثر كفاءة
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            جاهز للبدء؟
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            انضم إلى آلاف المطورين الذين يستخدمون أحدث التقنيات لبناء مستقبل الويب
          </p>
          <button className="btn-primary">
            ابدأ مجاناً الآن
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
