import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download } from 'lucide-react';

const ContentSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  }

  const handleDownload = (imageName: string, fileName: string) => {
    const link = document.createElement('a')
    link.href = `/${imageName}`
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const services = [
    {
      title: '1. Создание и запуск сайтов (Автоматизация)',
      items: [
        'Manus AI и Kimi: Наши «архитекторы». Мы просто писали текстом, какой сайт нам нужен, а эти сервисы сами писали код и создавали структуру страниц.',
        'Stitch AI: Революционный инструмент от Google. С его помощью мы превращали простые идеи и наброски в профессиональный дизайн интерфейсов. Он позволяет буквально «общаться» с дизайном, меняя его на лету.',
        'GitHub и Vercel: Наша система доставки. Мы настроили всё так, чтобы Manus сам отправлял файлы в GitHub (хранилище кода), а сервис Vercel тут же публиковал их в интернете. Теперь ваш сайт доступен по ссылке всему миру!',
        'Яндекс Карты: Мы использовали их как базу знаний — брали оттуда реальные описания, адреса и данные для наполнения наших сайтов.',
      ],
    },
    {
      title: '2. Творчество: Картинки, Видео и Презентации',
      items: [
        'Nano Banana 2: Наш главный художник. Мы создавали уникальные высококачественные изображения для сайтов и постов, просто описывая словами то, что хотим увидеть.',
        'AI Arena: Площадка для работы с видео. Мы посмотрели, как нейросети могут оживлять кадры и создавать крутые видеоролики из обычного текста или картинок.',
        'Работа с презентациями: Мы использовали наши ноутбуки, чтобы собрать всю информацию воедино и подготовить красивые отчеты и презентации на основе сгенерированных данных.',
      ],
    },
    {
      title: '3. Мощные текстовые помощники (Интеллект)',
      items: [
        'Gemini: Универсальный ассистент от Google. Он помогал нам формулировать мысли, проверять информацию и придумывать идеи.',
        'GigaChat Ultra: Новейшая и самая мощная модель от Сбера. Она великолепно понимает русский язык и культурные особенности, помогая писать тексты в нужном стиле.',
        'Qwen и DeepSeek: Передовые китайские нейросети. Они считаются одними из самых умных в мире — особенно хороши в логике, математике и помощи в написании сложных программ.',
      ],
    },
  ]

  const guide = [
    { step: '1. Поиск информации', text: 'Найдите данные (адрес, описание) в Яндекс Картах или напишите их сами.' },
    { step: '2. Генерация', text: 'В Manus AI опишите словами, какой сайт вам нужен, и вставьте данные.' },
    { step: '3. Связка', text: 'В настройках Manus выберите «Connect GitHub», чтобы ИИ сохранил там код.' },
    { step: '4. Публикация', text: 'Зайдите в Vercel, выберите ваш проект из GitHub и нажмите «Deploy». Сайт в сети!' },
  ]

  const quickGuide = [
    { icon: '🌐', title: 'Нужен работающий сайт?', desc: 'Manus AI + GitHub + Vercel' },
    { icon: '🎨', title: 'Нужна красивая картинка?', desc: 'Nano Banana 2' },
    { icon: '🎬', title: 'Хотите оживить видео?', desc: 'AI Arena' },
    { icon: '✍️', title: 'Письмо на русском?', desc: 'GigaChat Ultra' },
    { icon: '💡', title: 'Умный советник?', desc: 'Gemini' },
    { icon: '🧮', title: 'Логическая задача?', desc: 'Qwen или DeepSeek' },
    { icon: '🎭', title: 'Поменять дизайн?', desc: 'Stitch AI' },
  ]

  const conclusions = [
    { title: 'Не бойтесь общаться', text: 'С нейросетью нужно разговаривать как с очень способным стажером. Чем подробнее ваш запрос, тем круче результат.' },
    { title: 'Проверяйте информацию', text: 'ИИ — отличный помощник, но финальное слово всегда за вами.' },
    { title: 'Всё связано', text: 'Теперь вы знаете, что нейросети могут работать в команде: одна придумывает текст, вторая рисует, а третья делает из этого готовый сайт.' },
  ]

  return (
    <div ref={ref} className="bg-black py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Services Sections */}
        {services.map((service, sIdx) => (
          <motion.div
            key={sIdx}
            custom={sIdx}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl text-white font-serif mb-8">{service.title}</h2>
            <div className="space-y-6">
              {service.items.map((item, iIdx) => (
                <div key={iIdx} className="liquid-glass rounded-2xl p-6 md:p-8">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Divider */}
        <motion.div
          custom={3}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="my-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Guide Section */}
        <motion.div
          custom={4}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-8">🛠 Шпаргалка: Как сделать сайт через Manus (пошагово)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guide.map((item, idx) => (
              <div key={idx} className="liquid-glass rounded-2xl p-6 md:p-8">
                <h3 className="text-xl text-white font-semibold mb-3">{item.step}</h3>
                <p className="text-white/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          custom={5}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="my-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Quick Guide */}
        <motion.div
          custom={6}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-8">📋 Что и для чего использовать (Краткий гид)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickGuide.map((item, idx) => (
              <div key={idx} className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70">— {item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          custom={7}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="my-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Conclusions */}
        <motion.div
          custom={8}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-8">💡 Главные выводы:</h2>
          <div className="space-y-6">
            {conclusions.map((item, idx) => (
              <div key={idx} className="liquid-glass rounded-2xl p-6 md:p-8">
                <h3 className="text-xl text-white font-semibold mb-3">• {item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          custom={9}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="liquid-glass rounded-2xl p-8 md:p-10 text-center border-t border-white/10"
        >
          <p className="text-white/60 text-lg">Ваш проводник в мир технологий,</p>
          <p className="text-white text-2xl font-semibold mt-2">Команда KIBERone</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          custom={10}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="my-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Cheat Sheets / Memory Cards */}
        <motion.div
          custom={11}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-12 text-center">📚 Памятки и шпаргалки</h2>
          
          <div className="space-y-12">
            {/* Memory Card 1 - Создание сайта */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="liquid-glass rounded-3xl overflow-hidden shadow-2xl transform transition-transform"
            >
              <div className="p-6">
                <h3 className="text-2xl text-white font-serif mb-4">🌐 Создание сайта</h3>
                <p className="text-white/70 mb-6">Пошаговая инструкция по созданию работающего сайта с помощью ИИ инструментов</p>
              </div>
              <div className="px-6 pb-6">
                <img 
                  src={`/memory1.png?v=${Date.now()}`} 
                  alt="Создание сайта"
                  className="w-full h-auto object-contain rounded-2xl mb-4"
                />
                <div className="flex justify-center">
                  <button
                    onClick={() => handleDownload('memory1.png', 'Создание сайта.png')}
                    className="bg-white/20 hover:bg-white/30 rounded-full px-6 py-3 text-white transition-colors flex items-center gap-2 font-medium"
                    title="Скачать"
                  >
                    <Download size={20} />
                    Скачать
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Memory Card 2 - Классификация */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="liquid-glass rounded-3xl overflow-hidden shadow-2xl transform transition-transform"
            >
              <div className="p-6">
                <h3 className="text-2xl text-white font-serif mb-4">📋 Классификация</h3>
                <p className="text-white/70 mb-6">Структурированная классификация инструментов и сервисов</p>
              </div>
              <div className="px-6 pb-6">
                <img 
                  src={`/memory2.png?v=${Date.now()}`} 
                  alt="Классификация"
                  className="w-full h-auto object-contain rounded-2xl mb-4"
                />
                <div className="flex justify-center">
                  <button
                    onClick={() => handleDownload('memory2.png', 'Классификация.png')}
                    className="bg-white/20 hover:bg-white/30 rounded-full px-6 py-3 text-white transition-colors flex items-center gap-2 font-medium"
                    title="Скачать"
                  >
                    <Download size={20} />
                    Скачать
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContentSection
