import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // محاكاة إرسال البيانات
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success')
        setMessage('تم الاشتراك بنجاح! شكراً لك.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage('يرجى إدخال بريد إلكتروني صحيح.')
      }
    }, 1500)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="container">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              ابق على اطلاع
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              اشترك في نشرتنا الإخبارية واحصل على آخر الأخبار والتحديثات والتقنيات الجديدة مباشرة في صندوق الوارد الخاص بك
            </p>
          </div>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900 placeholder-gray-500 dark:text-white dark:placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>جاري الإرسال...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>اشترك</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center space-x-2 space-x-reverse p-3 rounded-lg ${
                  status === 'success' 
                    ? 'bg-green-500/20 text-green-100' 
                    : 'bg-red-500/20 text-red-100'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span className="text-sm">{message}</span>
              </motion.div>
            )}
          </motion.form>

          {/* Benefits */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white text-xl">📧</span>
              </div>
              <h3 className="text-white font-semibold">أسبوعياً</h3>
              <p className="text-white/80 text-sm">تحديثات منتظمة كل أسبوع</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-white font-semibold">محتوى مخصص</h3>
              <p className="text-white/80 text-sm">محتوى مصمم خصيصاً لاهتماماتك</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white text-xl">🚫</span>
              </div>
              <h3 className="text-white font-semibold">بدون إزعاج</h3>
              <p className="text-white/80 text-sm">يمكنك إلغاء الاشتراك في أي وقت</p>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex items-center justify-center space-x-8 space-x-reverse mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-white/80 text-sm">مشترك نشط</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-white/80 text-sm">معدل الرضا</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-white/80 text-sm">رسائل مزعجة</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
