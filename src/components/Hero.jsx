import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import HeroHeadline from './HeroHeadline'
import HeroDescription from './HeroDescription'
import HeroCTA from './HeroCTA'
import HeroImage from './HeroImage'
import { container, item, noMotion } from '../lib/motionVariants'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = prefersReducedMotion ? noMotion : item
  const containerVariants = prefersReducedMotion ? noMotion : container

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative isolate overflow-hidden bg-carefair-bg"
    >
      <Navbar variants={itemVariants} />

      <section
        aria-labelledby="hero-heading"
        className="relative mx-auto flex max-w-[1440px] flex-col gap-12 px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:flex-row lg:items-center lg:gap-[83px] lg:px-[49px] lg:pb-28 lg:pt-24"
      >
        <div className="flex min-w-0 flex-col gap-10 lg:gap-[78px]">
          <div className="flex min-w-0 flex-col gap-5 lg:gap-[22px]">
            <HeroHeadline variants={itemVariants} />
            <HeroDescription variants={itemVariants} />
          </div>
          <HeroCTA variants={itemVariants} />
        </div>

        <HeroImage variants={itemVariants} />
      </section>
    </motion.div>
  )
}
