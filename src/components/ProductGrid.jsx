import { motion, useReducedMotion } from 'framer-motion'
import ProductCard from './ProductCard'
import { item, noMotion } from '../lib/motionVariants'

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function ProductGrid({ products }) {
  const prefersReducedMotion = useReducedMotion()
  const containerVariants = prefersReducedMotion ? noMotion : gridContainer
  const itemVariants = prefersReducedMotion ? noMotion : item

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
      className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-8 gap-y-14 px-6 pb-24 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-[49px] xl:grid-cols-4"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variants={itemVariants} />
      ))}
    </motion.div>
  )
}
