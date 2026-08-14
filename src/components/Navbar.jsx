import { motion } from 'framer-motion'
import { navLinks } from '../data/navLinks'
import logoMark from '../assets/icons/logo-mark.svg'
import iconSearch from '../assets/icons/icon-search.svg'
import iconCart from '../assets/icons/icon-cart.svg'
import iconProfile from '../assets/icons/icon-profile.svg'

const icons = [
  { src: iconSearch, label: 'Search' },
  { src: iconCart, label: 'Cart' },
  { src: iconProfile, label: 'Account' },
]

export default function Navbar({ variants }) {
  return (
    <motion.header variants={variants} className="relative border-b border-white/20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 lg:px-[49px]">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-xs font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className={
                    link.active
                      ? 'text-carefair-accent uppercase transition-colors hover:text-white'
                      : 'text-white uppercase transition-colors hover:text-carefair-accent'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#home" className="flex items-center gap-1.5" aria-label="Carefair home">
          <img src={logoMark} alt="" aria-hidden="true" className="h-5 w-[52px]" />
          <span className="font-display text-2xl text-white">Carefair</span>
        </a>

        <ul className="flex items-center gap-5">
          {icons.map(({ src, label }) => (
            <li key={label}>
              <button
                type="button"
                aria-label={label}
                className="flex size-6 items-center justify-center transition-opacity hover:opacity-70"
              >
                <img src={src} alt="" aria-hidden="true" className="size-6" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  )
}
