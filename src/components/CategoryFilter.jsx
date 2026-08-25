import { motion } from 'framer-motion'

export default function CategoryFilter({ categories, active, onChange, variants }) {
  const options = ['All', ...categories]

  return (
    <motion.div
      variants={variants}
      className="mx-auto flex max-w-[1440px] flex-wrap gap-3 px-6 pb-10 sm:px-10 lg:px-[49px]"
    >
      {options.map((category) => {
        const isActive = active === category
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={
              isActive
                ? 'rounded-full bg-carefair-accent px-5 py-2 font-body text-xs font-medium uppercase tracking-wide text-carefair-ink transition-colors duration-300'
                : 'rounded-full border border-white/20 px-5 py-2 font-body text-xs font-medium uppercase tracking-wide text-white/70 transition-colors duration-300 hover:border-carefair-accent/60 hover:text-carefair-accent'
            }
          >
            {category}
          </button>
        )
      })}
    </motion.div>
  )
}
