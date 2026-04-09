import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
  }

  return (
    <section
      ref={ref}
      id="about"
      className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden relative"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, transparent 70%), #000000',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-white/40 text-sm tracking-widest uppercase mb-8">
            About Us
          </motion.p>

          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
          >
            <span className="font-serif italic text-white/60">Pioneering then ideas</span>
            <span className="text-white/60"> for</span>
            <br className="hidden md:block" />
            <span className="font-serif italic text-white/60">minds that then create, build, and inspire.</span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
