import { motion, useReducedMotion } from 'framer-motion'

const PETAL_ANGLES = [0, 72, 144, 216, 288]

const petalVariants = {
  hidden: { scale: 0, rotate: -18, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 1.1 + i * 0.06,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const centerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.1 + PETAL_ANGLES.length * 0.06 + 0.05,
      duration: 0.35,
      ease: 'easeOut',
    },
  },
}

export default function BloomFlower({ className = '' }) {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`relative -top-[0.05em] inline-block h-[0.6em] w-[0.6em] align-middle ${className}`}
    >
      {PETAL_ANGLES.map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 12 12)`}>
          <motion.ellipse
            cx="12"
            cy="6.5"
            rx="2.1"
            ry="4.2"
            fill="currentColor"
            style={{ transformOrigin: '12px 12px' }}
            custom={i}
            initial={initial}
            animate="visible"
            variants={petalVariants}
          />
        </g>
      ))}
      <motion.circle
        cx="12"
        cy="12"
        r="2.1"
        className="text-carefair-bg"
        fill="currentColor"
        initial={initial}
        animate="visible"
        variants={centerVariants}
      />
    </svg>
  )
}
