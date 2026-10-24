'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    src: '/images/hero/cataratas-br-hq.jpg',
    alt: 'Cataratas do Iguaçu, lado brasileiro',
    href: '/viagens/cataratas-brasileiras',
  },
  {
    src: '/images/destinos/argentina.jpg',
    alt: 'Cataratas do Iguaçu, lado argentino',
    href: '/viagens/cataratas-argentinas',
  },
  {
    src: '/images/passeios/parque-tucano-hq.jpg',
    alt: 'Tucano no Parque das Aves, em Foz do Iguaçu',
    href: '/viagens/parque-das-aves',
  },
  {
    src: '/images/passeios/parque-araras-hq.jpg',
    alt: 'Araras no Parque das Aves',
    href: '/viagens/parque-das-aves',
  },
  {
    src: '/images/passeios/dreams-entrada-hq.jpg',
    alt: 'Dreamland Museu de Cera, Dreams Park Show',
    href: '/viagens/dreams',
  },
  {
    src: '/images/passeios/roda-gigante-hq.jpg',
    alt: 'Roda gigante Yup Star, em Foz do Iguaçu',
    href: '/viagens/roda-gigante-e-marco',
  },
  {
    src: '/images/passeios/catamara-hq.jpg',
    alt: 'Catamarã Kattamaram II no rio',
    href: '/viagens/catamara',
  },
  {
    src: '/images/passeios/new-zone-hq.jpg',
    alt: 'New Zone e compras em Ciudad del Este',
    href: '/viagens/new-zone-shopping-china',
  },
  {
    src: '/images/passeios/duty-free.jpg',
    alt: 'Duty Free de Puerto Iguazú',
    href: '/viagens/by-night-argentina',
  },
  {
    src: '/images/passeios/tio-querido-hq.jpg',
    alt: 'Jantar do By Night em Puerto Iguazú',
    href: '/viagens/by-night-argentina',
  },
]

const AUTOPLAY_MS = 5000

export const AboutImageSlider: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => goTo(index + 1), AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [goTo, index, paused])

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carrossel"
      aria-label="Fotos da Bark Tour na Tríplice Fronteira"
    >
      <div
        className="flex h-[420px] transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <Link
            key={slide.src}
            href={slide.href}
            className="relative h-full w-full flex-shrink-0"
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              priority={i === 0}
            />
            <span className="sr-only">Ver passeio: {slide.alt}</span>
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          goTo(index - 1)
        }}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md transition-all hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          goTo(index + 1)
        }}
        aria-label="Próxima foto"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md transition-all hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              goTo(i)
            }}
            aria-label={`Ir para foto ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
