import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15 },
    }),
  }

  const services = [
    {
      tag: 'Strategy',
      title: 'Research & Insight',
      description: 'We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    },
    {
      tag: 'Craft',
      title: 'Design & Execution',
      description: 'From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    },
  ]

  return (
    <section
      ref={ref}
      id="services"
      className="bg-black py-28 md:py-40 px-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 60%), #000000',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">What we do</h2>
          <p className="text-white/40 text-sm hidden md:block">Our services</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.tag}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="liquid-glass rounded-3xl overflow-hidden group"
            >
              {/* Video */}
              <div className="aspect-video overflow-hidden relative">
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={service.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                <p className="uppercase tracking-widest text-white/40 text-xs mb-3">{service.tag}</p>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-white text-xl md:text-2xl tracking-tight flex-1">{service.title}</h3>
                  <div className="liquid-glass rounded-full p-2 flex-shrink-0">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
