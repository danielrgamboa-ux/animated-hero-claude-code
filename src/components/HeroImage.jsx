import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import heroPhoto1 from '../assets/images/hero-skincare.webp'
import heroPhoto2 from '../assets/images/hero-skincare-2.webp'
import heroPhoto3 from '../assets/images/hero-skincare-3.webp'
import heroPhoto4 from '../assets/images/hero-skincare-4.webp'

const SLIDES = [
  {
    src: heroPhoto1,
    alt: 'Woman smiling with eyes closed while applying skincare cream to her cheek',
  },
  {
    src: heroPhoto2,
    alt: 'Woman with eyes closed applying cream to her cheek in warm light',
  },
  {
    src: heroPhoto3,
    alt: 'Woman with eyes closed applying serum from a dropper to her face',
  },
  {
    src: heroPhoto4,
    alt: 'Woman holding a jar of cream next to her face in warm dappled light',
  },
]

const SLIDE_DURATION = 5000

export default function HeroImage({ variants }) {
  const prefersReducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      variants={variants}
      className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[661px]"
    >
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -14, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                delay: 1.3,
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
        className="relative aspect-[661/673] w-full overflow-hidden rounded-[40px] bg-white shadow-[21px_26px_15px_0px_rgba(0,0,0,0.25)] lg:rounded-[50px]"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={SLIDES[index].src}
            alt={SLIDES[index].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 size-full object-cover"
          />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
