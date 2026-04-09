import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div ref={ref} className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="text-6xl md:text-7xl lg:text-8xl text-white tracking-tight whitespace-normal font-serif mb-8"
      >
        🚀 Мастер-класс по <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">Искусственному Интеллекту</em>
      </motion.h1>

      <motion.p
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ delay: 0.2 }}
        className="text-white/70 text-lg md:text-xl leading-relaxed px-4 max-w-3xl"
      >
        Дорогие родители! На мастер-классе мы научились использовать нейросети не просто как игрушки, а как мощные инструменты для жизни, работы и творчества.
      </motion.p>
    </div>
  )
}

export default HeroSection
