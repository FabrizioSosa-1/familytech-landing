import { useState } from 'react'
import {
  BarChart3,
  Check,
  Copy,
  Laptop,
  MessageCircle,
  ScanLine,
  ShieldCheck,
  Video,
  Wrench,
} from 'lucide-react'
import {
  empresa,
  infraestructura,
  mantenimiento,
  proceso,
  razones,
  soluciones,
  trabajos,
} from '../data/site'
import { ArrowLink, BottomFade, ChamferCard, CtaButton, Eyebrow, chamfer } from './ui'

/* ------------------------------------------------------------------ HERO */
export function Hero() {
  return (
    <section
      id="inicio"
      data-section
      className="relative overflow-hidden bg-deep"
      style={{ minHeight: 'calc(100vh - 40px)' }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {['img/hero-a.webp', 'img/hero-b.webp', 'img/hero-c.webp'].map((src) => (
          <img key={src} src={src} alt="" className="hero-slide absolute inset-0 w-full h-full object-cover object-[center_28%]" />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/45 to-deep/85" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(6,20,55,0.55), transparent 70%)' }}
      />

      <div className="relative z-20 flex items-center justify-between px-4 sm:px-10 pt-5 sm:pt-8">
        <a href="#inicio" className="block" aria-label="Family Tech, inicio">
          <img src="img/logo-white.png" alt="Family Tech" className="h-9 sm:h-11 w-auto" />
        </a>
        <CtaButton href={empresa.whatsappUrl} short="WhatsApp">
          Pide tu visita técnica
        </CtaButton>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 pt-28 sm:pt-36 pb-28">
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] font-medium mb-6 text-aqua">
          Family Tech Integrators · Perú
        </p>
        <h1 className="font-firs font-normal tracking-[-0.04em] leading-[0.9] text-[48px] sm:text-[76px] md:text-[100px] lg:text-[120px]">
          <span className="sr-only">Family Tech Integrators — soluciones tecnológicas integrales en Perú. </span>
          tecnología
          <br />
          integral
        </h1>
        <p className="mt-8 max-w-md text-[12px] sm:text-[14px] uppercase tracking-[0.22em] font-medium leading-[1.8] opacity-90">
          Diseñamos, instalamos y damos soporte a toda la tecnología de tu empresa, con un solo proveedor
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-2xl">
          {['Redes y Wi-Fi', 'Cableado', 'Servidores', 'UPS', 'Cámaras', 'Climatización', 'Consultoría TI', 'Mantenimiento'].map(
            (t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-[11px] font-medium border border-white/30 bg-white/5 backdrop-blur-sm"
                style={{ clipPath: chamfer(6) }}
              >
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- SERVICIOS */
export function Servicios() {
  const [activo, setActivo] = useState(0)
  const s = infraestructura[activo]
  const izq = infraestructura.slice(0, 3)
  const der = infraestructura.slice(3)

  const card = (i: number) => {
    const it = infraestructura[i]
    return (
      <ChamferCard
        key={it.id}
        href={`#servicio-${it.id}`}
        title={it.titulo}
        subtitle={it.bajada}
        active={activo === i}
        onActivate={() => setActivo(i)}
      />
    )
  }

  return (
    <section id="servicios" data-section className="relative overflow-hidden bg-mist py-20 sm:py-28 px-6 sm:px-10">
      <div className="relative z-20 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-12 items-start">
        <div className="order-2 lg:order-1 flex flex-col gap-5 lg:mt-36">{izq.map((_, i) => card(i))}</div>

        <div className="order-1 lg:order-2 flex flex-col items-center text-center text-navy">
          <Eyebrow>infraestructura</Eyebrow>
          <h2 className="font-firs text-[44px] sm:text-[54px] font-semibold tracking-tight uppercase leading-none mt-2">
            servicios
          </h2>
          <div
            className="relative mt-6 sm:mt-8 w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] max-w-full overflow-hidden bg-navy"
            style={{ clipPath: chamfer(28) }}
          >
            {infraestructura.map((it, i) => (
              <img
                key={it.id}
                src={it.img}
                alt={`Técnico de Family Tech: ${it.titulo}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === activo ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-left bg-gradient-to-t from-deep/90 to-transparent">
              <p className="text-[10px] uppercase tracking-[0.2em] text-aqua">
                {String(activo + 1).padStart(2, '0')} / {String(infraestructura.length).padStart(2, '0')}
              </p>
              <p className="text-white font-semibold text-[15px] sm:text-[18px]">{s.titulo}</p>
            </div>
          </div>
        </div>

        <div className="order-3 flex flex-col gap-5 lg:mt-36">{der.map((_, i) => card(i + 3))}</div>
      </div>

      <div
        id={`servicio-${s.id}`}
        className="relative z-20 max-w-5xl mx-auto mt-14 bg-white/80 p-6 sm:p-8 grid gap-8 md:grid-cols-[1.2fr_1fr]"
        style={{ clipPath: chamfer(18) }}
        aria-live="polite"
      >
        <div className="min-w-0">
          <h3 className="font-firs text-[26px] sm:text-[32px] font-semibold uppercase tracking-tight leading-none">
            {s.titulo}
          </h3>
          <p className="mt-4 text-[16px] leading-[1.6] text-navy/85 max-w-prose">{s.detalle}</p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-2">
            {s.incluye.map((x) => (
              <li key={x} className="flex items-center gap-2 text-[14px]">
                <Check className="w-4 h-4 text-teal shrink-0" /> {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.2em] text-teal">Marcas con las que trabajamos</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {s.marcas.map((m) => (
              <span key={m} className="px-3 py-1.5 text-[12px] font-medium bg-mist" style={{ clipPath: chamfer(6) }}>
                {m}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <ArrowLink href={empresa.whatsappUrl}>Cotizar {s.titulo.toLowerCase()}</ArrowLink>
          </div>
        </div>
      </div>

      <BottomFade />
    </section>
  )
}

/* ------------------------------------------------------------ SOLUCIONES */
const iconos = {
  consultoria: BarChart3,
  ciber: ShieldCheck,
  equipos: Laptop,
  tecnico: Wrench,
  video: Video,
  acceso: ScanLine,
}

export function Soluciones() {
  return (
    <section id="soluciones" data-section className="relative overflow-hidden bg-cloud py-20 sm:py-28 px-6 sm:px-10">
      <div className="relative z-20 max-w-7xl mx-auto text-navy">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <Eyebrow>soluciones y servicios</Eyebrow>
            <h2 className="font-firs mt-2 text-[36px] sm:text-[48px] lg:text-[54px] font-semibold uppercase tracking-tight leading-[0.95]">
              Más allá
              <br />
              del cableado
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-[1.5] text-navy/80">
            Asesoría, seguridad, equipos y soporte para que la tecnología de tu empresa funcione todos los días.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {soluciones.map((s) => {
            const Icon = iconos[s.icon]
            return (
              <article
                key={s.titulo}
                className="group bg-white p-6 sm:p-7 transition hover:-translate-y-0.5"
                style={{ clipPath: chamfer(18) }}
              >
                <span className="grid place-items-center w-11 h-11 bg-navy text-aqua" style={{ clipPath: chamfer(8) }}>
                  <Icon className="w-5 h-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold">{s.titulo}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-navy/75">{s.texto}</p>
              </article>
            )
          })}
        </div>

        <div
          className="mt-5 bg-navy text-white p-6 sm:p-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] items-center"
          style={{ clipPath: chamfer(24) }}
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-aqua">Contratos de servicio</p>
            <h3 className="font-firs mt-2 text-[28px] sm:text-[36px] font-semibold uppercase tracking-tight leading-[0.95]">
              Mantenimiento preventivo y correctivo
            </h3>
            <p className="mt-4 text-[15px] leading-[1.6] text-white/80 max-w-md">
              Visitas programadas y soporte para que tus equipos no fallen cuando más los necesitas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {mantenimiento.map((m) => (
              <div
                key={m}
                className="flex items-center gap-3 bg-white/[0.07] border border-white/10 px-4 py-4 text-[14px] font-medium"
                style={{ clipPath: chamfer(10) }}
              >
                <span className="grid place-items-center w-6 h-6 rounded-full bg-aqua text-deep shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomFade />
    </section>
  )
}

/* -------------------------------------------------------------- NOSOTROS */
const statCards = [
  {
    value: '1 proveedor',
    text: 'para redes, energía, seguridad, climatización y equipos',
    img: 'img/obra-team.webp',
    offset: '',
    clip: 'polygon(64px 0, calc(100% - 14px) 0, calc(100% - 4px) 4px, 100% 14px, 100% calc(100% - 14px), calc(100% - 4px) calc(100% - 4px), calc(100% - 14px) 100%, 14px 100%, 4px calc(100% - 4px), 0 calc(100% - 14px), 0 64px)',
    pos: 'left-6 right-6 bottom-6',
  },
  {
    value: '13 servicios',
    text: 'de infraestructura, soluciones TI y mantenimiento con un mismo equipo',
    img: 'img/obra-punto-red.webp',
    offset: 'lg:mt-24',
    clip: 'polygon(0 14px, 4px 4px, 14px 0, calc(100% - 64px) 0, 100% 64px, 100% calc(100% - 14px), calc(100% - 4px) calc(100% - 4px), calc(100% - 14px) 100%, 64px 100%, 0 calc(100% - 64px))',
    pos: 'left-6 right-6 bottom-20',
  },
  {
    value: '4 etapas',
    text: 'diagnóstico, diseño, instalación y soporte en cada proyecto',
    img: 'img/obra-ac.webp',
    offset: '',
    clip: 'polygon(0 14px, 4px 4px, 14px 0, calc(100% - 64px) 0, 100% 64px, 100% calc(100% - 64px), calc(100% - 64px) 100%, 14px 100%, 4px calc(100% - 4px), 0 calc(100% - 14px))',
    pos: 'left-6 right-28 bottom-6',
  },
]

export function Nosotros() {
  return (
    <section id="nosotros" data-section className="relative overflow-hidden bg-cloud pt-10 pb-20 sm:pb-28 px-6 sm:px-10">
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 text-navy">
          <div>
            <Eyebrow>quiénes somos</Eyebrow>
            <h2 className="font-firs mt-2 text-[36px] sm:text-[48px] lg:text-[54px] font-semibold uppercase tracking-tight leading-[0.95]">
              Tu equipo
              <br />
              de tecnología
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-[17px] sm:text-[18px] leading-[1.5]">
              Somos una empresa peruana de integración tecnológica. Acompañamos a pymes y medianas empresas con
              soluciones completas de infraestructura, seguridad, energía y soporte.
            </p>
            <p className="mt-4 text-[17px] sm:text-[18px] leading-[1.5]">
              Nuestro objetivo es que tu operación nunca se detenga: un mismo equipo diseña, instala y mantiene tu
              tecnología, y responde por ella.
            </p>
            <div className="mt-6">
              <ArrowLink href={empresa.whatsappUrl}>Conversemos por WhatsApp</ArrowLink>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {statCards.map((c) => (
            <div key={c.value} className={`relative ${c.offset}`}>
              <div
                className="w-full h-[280px] sm:h-[340px]"
                style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '1.5px', clipPath: c.clip }}
              >
                <div
                  className="w-full h-full overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.img})`, clipPath: c.clip, mixBlendMode: 'plus-darker' as never }}
                />
              </div>
              <div
                className="pointer-events-none absolute inset-[1.5px]"
                style={{
                  clipPath: c.clip,
                  background:
                    'linear-gradient(to top, rgba(243,246,251,0.97) 0%, rgba(243,246,251,0.85) 38%, rgba(243,246,251,0) 72%)',
                }}
              />
              <div className={`absolute ${c.pos}`}>
                <p className="font-firs font-semibold uppercase text-[32px] sm:text-[42px] leading-none whitespace-nowrap text-brand-gradient">
                  {c.value}
                </p>
                <p className="mt-3 text-[14px] leading-[1.4] text-navy max-w-[66%]">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-teal">Por qué elegirnos</p>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {razones.map((r) => (
              <div key={r.titulo} className="border-t border-navy/15 pt-5">
                <p className="text-[16px] font-semibold text-navy flex items-center gap-2">
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-teal text-white">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {r.titulo}
                </p>
                <p className="mt-2 text-[14px] leading-[1.5] text-navy/75">{r.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomFade />
    </section>
  )
}

/* --------------------------------------------------------------- PROCESO */
export function Proceso() {
  return (
    <section id="proceso" data-section className="relative overflow-hidden bg-deep text-white py-20 sm:py-28 px-6 sm:px-10">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at 85% 0%, #087A88, transparent 55%)' }}
      />
      <div className="relative max-w-7xl mx-auto">
        <Eyebrow light>cómo trabajamos</Eyebrow>
        <h2 className="font-firs mt-2 text-[36px] sm:text-[48px] lg:text-[54px] font-semibold uppercase tracking-tight leading-[0.95]">
          De la visita
          <br />
          al soporte
        </h2>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map((p, i) => (
            <li key={p.titulo} className="relative bg-white/[0.06] border border-white/10 p-6" style={{ clipPath: chamfer(16) }}>
              <span className="font-firs text-[44px] leading-none text-aqua">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 text-[18px] font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-white/75">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- TRABAJOS */
export function Trabajos() {
  return (
    <section id="trabajos" data-section className="relative overflow-hidden bg-mist py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-navy">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <Eyebrow>trabajos reales</Eyebrow>
            <h2 className="font-firs mt-2 text-[36px] sm:text-[48px] lg:text-[54px] font-semibold uppercase tracking-tight leading-[0.95]">
              En obra
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-[1.5] text-navy/80">
            Gabinetes, cableado, UPS, cámaras y climatización instalados por nuestro equipo en empresas como la tuya.
          </p>
        </div>
        <div className="mt-12 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {trabajos.map((t) => (
            <figure key={t.img} className="relative mb-4 break-inside-avoid overflow-hidden group" style={{ clipPath: chamfer(16) }}>
              <img src={t.img} alt={t.texto} loading="lazy" className="w-full h-auto block transition duration-500 group-hover:scale-[1.03]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-[12px] sm:text-[13px] font-medium text-white bg-gradient-to-t from-deep/85 to-transparent">
                {t.texto}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- CONTACTO */
function Dato({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="border-t border-white/15 pt-4 min-w-0">
      <p className="text-[11px] uppercase tracking-[0.2em] text-aqua">{label}</p>
      {value ? (
        <p className="mt-1 text-[15px] font-medium break-words">{value}</p>
      ) : (
        <p className="mt-1 inline-block text-[13px] font-medium text-white/60 border border-dashed border-white/30 px-2 py-0.5">
          Por confirmar
        </p>
      )}
    </div>
  )
}

export function Contacto() {
  const [copiado, setCopiado] = useState(false)
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(empresa.whatsapp)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1800)
    } catch {
      const el = document.getElementById('wa-numero')
      if (el) window.getSelection()?.selectAllChildren(el)
    }
  }

  return (
    <section id="contacto" data-section className="relative overflow-hidden bg-navy text-white px-6 sm:px-10 py-20 sm:py-28">
      <img src="img/equipo.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-br from-deep/90 via-navy/80 to-teal/40" />
      <div className="relative max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.3fr_1fr] items-end">
        <div>
          <Eyebrow light>contacto</Eyebrow>
          <h2 className="font-firs mt-3 text-[32px] sm:text-[56px] lg:text-[68px] font-semibold uppercase tracking-tight leading-[0.92]">
            ¿Listo para ordenar
            <br />
            la tecnología de
            <br />
            tu empresa?
          </h2>
          <p className="mt-6 text-[17px] leading-[1.5] text-white/80 max-w-lg">
            Agenda una visita técnica de levantamiento. Revisamos tu sede y te proponemos opciones según tu presupuesto.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton href={empresa.whatsappUrl} tone="aqua">
              <MessageCircle className="w-4 h-4" /> Pedir visita técnica
            </CtaButton>
            <span className="flex items-center gap-2">
              <span id="wa-numero" className="text-[18px] font-semibold tracking-wide select-all">
                {empresa.whatsapp}
              </span>
              <button
                type="button"
                onClick={copiar}
                className="grid place-items-center w-8 h-8 bg-white/10 hover:bg-white/20 transition"
                style={{ clipPath: chamfer(7) }}
                aria-label="Copiar número de WhatsApp"
              >
                {copiado ? <Check className="w-4 h-4 text-aqua" /> : <Copy className="w-4 h-4" />}
              </button>
            </span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
          <Dato label="WhatsApp" value={empresa.whatsapp} />
          <Dato label="RUC" value={empresa.ruc} />
          <Dato label="Correo" value={empresa.correo} />
          <Dato label="Horario" value={empresa.horario} />
          <div className="sm:col-span-2">
            <Dato label="Dirección" value={empresa.direccion} />
          </div>
        </div>
      </div>

      <footer className="relative max-w-7xl mx-auto mt-20 pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-[12px] text-white/60">
        <img src="img/logo-white.png" alt="Family Tech" className="h-8 w-auto" />
        <p>
          {empresa.razon} · {empresa.claim} · RUC {empresa.ruc}
        </p>
      </footer>
    </section>
  )
}
