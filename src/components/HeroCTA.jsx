import { motion } from 'framer-motion'
import arrowDown from '../assets/icons/icon-arrow-down.svg'

export default function HeroCTA({ variants }) {
  return (
    <motion.div variants={variants} className="flex items-center gap-3">
      <a
        href="#shop"
        className="inline-flex h-[64px] items-center justify-center rounded-full bg-carefair-accent px-8 font-body text-base font-medium text-carefair-ink transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carefair-accent sm:h-[72px] sm:px-10 sm:text-lg lg:h-[84px] lg:px-12"
      >
        Shop Now
      </a>
      <a
        href="#more"
        aria-label="Scroll to learn more"
        className="flex size-16 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-[1.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carefair-accent sm:size-[72px] lg:size-[84px]"
      >
        <img src={arrowDown} alt="" aria-hidden="true" className="size-full" />
      </a>
    </motion.div>
  )
}
