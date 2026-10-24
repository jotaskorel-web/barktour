'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, Variants } from 'framer-motion'
import { Container } from '@/components/ui/Layout'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const HeroSection: React.FC = () => {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pb-28 pt-24 md:pb-32">
      {/* Imagem de fundo otimizada com leve zoom de entrada */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? { opacity: 0 } : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero/cataratas-br-hq.jpg"
          alt="Cataratas do Iguaçu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/55" />

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center text-white"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#E4C98A]"
          >
            Foz do Iguaçu · Tríplice Fronteira
          </motion.p>
          <motion.h1
            variants={item}
            className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Conheça a Tríplice Fronteira do seu jeito.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-100 md:text-xl"
          >
            Transporte privativo, entrada nas Cataratas sem fila de excursão e roteiros sob medida
            em Foz do Iguaçu, Paraguai e Argentina.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contato"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#141414] transition-all hover:bg-[#F7F4EE] hover:shadow-lg sm:w-auto"
            >
              Quero meu roteiro
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={generateWhatsAppLink(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/15 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
