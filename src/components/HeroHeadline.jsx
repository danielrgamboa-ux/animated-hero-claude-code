import { motion } from 'framer-motion'
import decoration from '../assets/icons/headline-decoration.svg'
import BloomFlower from './BloomFlower'

export default function HeroHeadline({ variants }) {
  return (
    <motion.h1
      id="hero-heading"
      variants={variants}
      className="relative max-w-[573px] break-words font-display text-[15vw] leading-[1.05] text-carefair-accent sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[109.7px] xl:leading-[1.107]"
    >
      Beauty{' '}
      <span className="inline-block whitespace-nowrap">
        bl
        <BloomFlower />
        <BloomFlower />
        ms
      </span>{' '}
      <img
        src={decoration}
        alt=""
        aria-hidden="true"
        className="mx-1 mb-1 inline-block h-[0.5em] w-auto align-middle opacity-90"
      />{' '}
      with Skincare
    </motion.h1>
  )
}
