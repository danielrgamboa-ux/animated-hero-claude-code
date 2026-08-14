import { motion } from 'framer-motion'

export default function HeroDescription({ variants }) {
  return (
    <motion.p
      variants={variants}
      className="max-w-[533px] font-body text-base font-light leading-6 text-white sm:text-lg"
    >
      Skincare formulated with care — clean ingredients, visible results, and
      a routine that feels good to keep. This is healthcare that feels like
      self-care.
    </motion.p>
  )
}
