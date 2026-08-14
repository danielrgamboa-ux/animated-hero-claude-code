import { motion, useReducedMotion } from 'framer-motion'
import heroPhoto from '../assets/images/hero-skincare.webp'

export default function HeroImage({ variants }) {
  const prefersReducedMotion = useReducedMotion()

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
        className="aspect-[661/673] w-full overflow-hidden rounded-[40px] bg-white shadow-[21px_26px_15px_0px_rgba(0,0,0,0.25)] lg:rounded-[50px]"
      >
        <img
          src={heroPhoto}
          alt="Woman smiling with eyes closed while applying skincare cream to her cheek"
          className="size-full object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
