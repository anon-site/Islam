import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'ما هي المنصة وكيف تعمل؟',
      answer: 'منصتنا هي بيئة تطوير متكاملة تجمع بين أحدث التقنيات والأدوات لمساعدتك في بناء تطبيقات ويب حديثة وسريعة. نحن نقدم أدوات التطوير، القوالب الجاهزة، والخدمات السحابية في مكان واحد.'
    },
    {
      question: 'هل المنصة مناسبة للمبتدئين؟',
      answer: 'نعم، بالطبع! صممنا المنصة لتكون سهلة الاستخدام للمبتدئين مع توفير أدوات متقدمة للمطورين المحترفين. نقدم دروساً تعليمية شاملة ودعماً فنياً لمساعدتك في البدء.'
    },
    {
      question: 'ما هي التقنيات المدعومة؟',
      answer: 'ندعم جميع التقنيات الحديثة مثل React، Vue، Angular، Node.js، Python، وأكثر من ذلك. كما نقدم تكاملاً مع خدمات سحابية مثل AWS، Google Cloud، وAzure.'
    },
    {
      question: 'كيف يمكنني الحصول على الدعم الفني؟',
      answer: 'نوفر دعم فني متعدد المستويات: دعم عبر البريد الإلكتروني للخطة الأساسية، دعم أولوية للخطة المتقدمة، ودعم مخصص 24/7 للخطة المؤسسية. كما نقدم مجتمعاً نشطاً للمطورين.'
    },
    {
      question: 'هل بياناتي آمنة ومحمية؟',
      answer: 'نعم، نأخذ الأمان على محمل الجد. نستخدم تشفير SSL، نسخ احتياطية منتظمة، ونساعد في الامتثال لمعايير الأمان الدولية. جميع البيانات محمية بأعلى معايير الأمان.'
    },
    {
      question: 'هل يمكنني تصدير مشاريعي؟',
      answer: 'بالطبع! يمكنك تصدير جميع مشاريعك في أي وقت. نؤمن بحرية المطورين وندعم تصدير الكود والبيانات بصيغ مختلفة مثل ZIP، Git، أو مباشرة إلى GitHub.'
    },
    {
      question: 'ما هي تكلفة الاستخدام؟',
      answer: 'نقدم خطة مجانية مع مميزات أساسية، وخطة متقدمة بسعر 29$ شهرياً، وخطة مؤسسية بسعر 99$ شهرياً. جميع الخطط المدفوعة تأتي مع فترة تجريبية مجانية لمدة 14 يوماً.'
    },
    {
      question: 'هل يمكنني العمل مع فريق؟',
      answer: 'نعم، في الخطط المتقدمة والمؤسسية يمكنك إدارة الفرق، مشاركة المشاريع، وتتبع التقدم. نقدم أدوات تعاون متقدمة لإدارة المشاريع الجماعية بكفاءة.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول منصتنا وخدماتنا
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="card cursor-pointer"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-right flex-1">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 mr-4"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-right">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            فريق الدعم الفني لدينا جاهز لمساعدتك في أي وقت. تواصل معنا وسنكون سعداء بالإجابة على جميع استفساراتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              تواصل معنا
            </button>
            <button className="btn-secondary">
              شاهد الدليل الشامل
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
