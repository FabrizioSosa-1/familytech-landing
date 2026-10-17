import { useEffect, useRef, useState } from 'react'
import { nav } from './data/site'
import { Contacto, Hero, Nosotros, Proceso, Servicios, Soluciones, Trabajos } from './components/Sections'

export default function App() {
  const scroller = useRef<HTMLDivElement>(null)
  const [actual, setActual] = useState(0)
  const [total, setTotal] = useState(7)

  useEffect(() => {
    const root = scroller.current
    if (!root) return
    const secciones = Array.from(root.querySelectorAll<HTMLElement>('[data-section]'))
    setTotal(secciones.length)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActual(secciones.indexOf(e.target as HTMLElement))
        })
      },
      { root, rootMargin: '-45% 0px -45% 0px' },
    )
    secciones.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="h-screen bg-white p-3 sm:p-5">
      <div className="relative w-full h-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white">
        <div ref={scroller} className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar scroll-smooth">
          <Hero />
          <Servicios />
          <Soluciones />
          <Nosotros />
          <Proceso />
          <Trabajos />
          <Contacto />
        </div>

        {/* Navegación flotante con esquinas invertidas */}
        <nav
          aria-label="Principal"
          className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 z-40 bg-white px-6 lg:px-10 py-4 gap-6 lg:gap-10"
          style={{ borderBottomLeftRadius: 28, borderBottomRightRadius: 28 }}
        >
          <span
            aria-hidden="true"
            className="absolute top-0 -left-6 w-6 h-6 bg-white"
            style={{
              WebkitMaskImage: 'radial-gradient(circle at 0 100%, transparent 24px, black 25px)',
              maskImage: 'radial-gradient(circle at 0 100%, transparent 24px, black 25px)',
            }}
          />
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[11px] uppercase tracking-[0.14em] font-medium transition hover:text-neutral-500 ${
                actual === i + 1 ? 'text-teal' : 'text-neutral-800'
              }`}
            >
              {n.label}
            </a>
          ))}
          <span
            aria-hidden="true"
            className="absolute top-0 -right-6 w-6 h-6 bg-white"
            style={{
              WebkitMaskImage: 'radial-gradient(circle at 100% 100%, transparent 24px, black 25px)',
              maskImage: 'radial-gradient(circle at 100% 100%, transparent 24px, black 25px)',
            }}
          />
        </nav>

        <div className="pointer-events-none absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-40 flex items-center gap-3 text-white/80 text-[10px] font-medium uppercase tracking-[0.18em] mix-blend-difference">
          <span>{pad(actual + 1)}</span>
          <span className="w-8 h-px bg-white/40" />
          <span>{pad(total)}</span>
        </div>
        <div className="pointer-events-none absolute bottom-4 sm:bottom-6 left-4 sm:left-8 z-40 text-white/80 text-[10px] font-medium uppercase tracking-[0.18em] mix-blend-difference">
          Desliza para descubrir
        </div>
      </div>
    </div>
  )
}
