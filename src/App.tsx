import { useRef, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import ContentSection from './components/ContentSection'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      video.play()
      let startTime = Date.now()
      const targetOpacity = 1
      const duration = 500

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        video.style.opacity = (0 + progress * (targetOpacity - 0)).toString()

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      animate()
    }

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.55) {
        let startTime = Date.now()
        const currentOpacity = parseFloat(video.style.opacity) || 1
        const duration = 500

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          video.style.opacity = (currentOpacity - progress * currentOpacity).toString()

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setTimeout(() => {
              video.currentTime = 0
              video.play()
              let fadeStartTime = Date.now()
              const fadeAnimate = () => {
                const elapsed = Date.now() - fadeStartTime
                const progress = Math.min(elapsed / 500, 1)
                video.style.opacity = (progress).toString()

                if (progress < 1) {
                  requestAnimationFrame(fadeAnimate)
                }
              }
              fadeAnimate()
            }, 100)
          }
        }

        animate()
      }
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="min-h-screen overflow-hidden relative flex flex-col bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          muted
          autoPlay
          playsInline
          preload="auto"
          style={{ opacity: 0 }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
            type="video/mp4"
          />
        </video>

        {/* Hero Content */}
        <HeroSection />
      </section>

      {/* CONTENT SECTIONS */}
      <ContentSection />
    </>
  )
}

export default App
