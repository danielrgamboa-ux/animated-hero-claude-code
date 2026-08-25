import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ShopIntro from '../components/ShopIntro'
import CategoryFilter from '../components/CategoryFilter'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { products, categories } from '../data/products'
import { container, item, noMotion } from '../lib/motionVariants'

export default function ShopPage() {
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = prefersReducedMotion ? noMotion : item
  const containerVariants = prefersReducedMotion ? noMotion : container
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative isolate overflow-hidden bg-carefair-bg"
    >
      <Navbar variants={itemVariants} />
      <ShopIntro variants={itemVariants} />
      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
        variants={itemVariants}
      />
      <ProductGrid products={filteredProducts} />
      <Footer />
    </motion.div>
  )
}
