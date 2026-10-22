import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Layout'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { Compass } from 'lucide-react'

export const CTASection: React.FC = () => {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden md:min-h-[780px]">
      <Image
        src="/images/hero/marco-hd.jpg"
        alt="Obelisco do Marco das Três Fronteiras, em Foz do Iguaçu"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/45" />

      <Container className="relative z-10 py-28 text-center text-white md:py-36">
        <Reveal>
          <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold md:text-5xl">
            Pronto para conhecer Foz do Iguaçu sem complicação?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-100">
            Monte seu roteiro com quem conhece a região. Você aproveita. A Bark Tour cuida do caminho.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={generateWhatsAppLink(WHATSAPP_MESSAGES.quotation)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-[#141414] transition-all hover:bg-[#F7F4EE] sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar com a Bark Tour
          </a>
          <Link
            href="/viagens"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white/15 sm:w-auto"
          >
            <Compass className="h-5 w-5" />
            Ver roteiros
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
