import { motion } from 'framer-motion'

export default function ProductCard({ product, variants }) {
  return (
    <motion.div variants={variants} className="group flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden rounded-[24px] bg-white">
        <img
          src={product.image}
          alt={product.alt}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
          {product.category}
        </span>
        <h3 className="font-display text-xl text-white">{product.name}</h3>
        <span className="font-body text-sm text-carefair-accent">${product.price}.00</span>
      </div>
      <button
        type="button"
        className="mt-1 inline-flex h-11 w-fit items-center justify-center rounded-full border border-carefair-accent/50 px-6 font-body text-xs font-medium uppercase tracking-wide text-carefair-accent transition-colors duration-300 hover:bg-carefair-accent hover:text-carefair-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carefair-accent"
      >
        Add to bag
      </button>
    </motion.div>
  )
}
