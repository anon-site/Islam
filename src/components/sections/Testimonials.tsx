import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مطور ويب',
      company: 'شركة التقنية المتقدمة',
      content: 'هذه المنصة غيرت طريقة عملي تماماً. السرعة والكفاءة لا مثيل لها، وأنا أنصح بها بشدة لكل مطور.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'فاطمة علي',
      role: 'مصممة واجهات',
      company: 'استوديو الإبداع',
      content: 'التصميم جميل والواجهة سهلة الاستخدام. ساعدتني في إنجاز مشاريعي بسرعة أكبر من المتوقع.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'محمد حسن',
      role: 'مدير مشاريع',
      company: 'مجموعة الحلول الذكية',
      content: 'أدوات رائعة وسهلة الاستخدام. فريق العمل أصبح أكثر إنتاجية بعد استخدام هذه المنصة.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'سارة أحمد',
      role: 'مطورة تطبيقات',
      company: 'شركة الابتكار التقني',
      content: 'المميزات المتقدمة والسرعة في التنفيذ جعلت من عملي متعة حقيقية. أنصح بها بشدة!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'خالد إبراهيم',
      role: 'مطور Full Stack',
      company: 'شركة التقنيات الحديثة',
      content: 'منصة مذهلة تجمع بين القوة والسهولة. ساعدتني في بناء تطبيقات معقدة بسهولة تامة.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'نور الدين',
      role: 'مصمم تجربة المستخدم',
      company: 'وكالة الإبداع الرقمي',
      content: 'التصميم المتجاوب والأداء المتميز جعل هذه المنصة الخيار الأول لجميع مشاريعي.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      rating: 5
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            اكتشف ما يقوله آلاف المطورين والمصممين حول تجربتهم مع منصتنا
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-primary-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 space-x-reverse">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-right">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 space-x-reverse">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-right">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-400">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-400">تقييم العملاء</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
            <div className="text-gray-600">وقت التشغيل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">دعم فني</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
