import { motion } from 'framer-motion'

export default function ShopIntro({ variants }) {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 pb-10 pt-16 sm:px-10 sm:pb-14 sm:pt-20 lg:px-[49px] lg:pb-16 lg:pt-24">
      <motion.span
        variants={variants}
        className="text-xs font-medium uppercase tracking-[0.2em] text-carefair-accent"
      >
        Collection — 12 Products
      </motion.span>
      <motion.h1
        variants={variants}
        className="max-w-[640px] font-display text-[11vw] leading-[1.05] text-carefair-accent sm:text-[48px] md:text-[56px] lg:text-[64px]"
      >
        The Skincare Edit
      </motion.h1>
      <motion.p variants={variants} className="max-w-[540px] font-body text-white/70 sm:text-lg">
        A curated range formulated with care — clean ingredients, considered routines, and
        results you can feel. Pick what your skin is asking for.
      </motion.p>
    </div>
  )
}
