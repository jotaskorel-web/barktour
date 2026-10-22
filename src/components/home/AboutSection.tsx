import Link from 'next/link'
import { Section } from '@/components/ui/Layout'
import { Reveal } from '@/components/ui/Reveal'
import { AboutImageSlider } from '@/components/home/AboutImageSlider'
import { WHATSAPP_MESSAGES, generateWhatsAppLink } from '@/config/contact'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const AboutSection: React.FC = () => {
  return (
    <Section id="sobre">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Reveal>
          <AboutImageSlider />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center md:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold-700">
              Sobre a Bark Tour
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Mais que transporte. Uma experiência completa.
            </h2>

            <p className="mb-4 text-lg text-gray-600">
              Há mais de 30 anos, a experiência da Bark Tour é construída na Tríplice Fronteira.
              O conhecimento da região passou de geração em geração e hoje vira roteiro privativo
              para cada grupo.
            </p>

            <p className="mb-8 text-lg text-gray-600">
              A equipe atende em português, inglês e espanhol. Além do carro, organiza horários,
              deslocamentos, atrações e indicações — para você aproveitar Foz, o Paraguai e a
              Argentina sem o ritmo de uma excursão.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center rounded-lg border border-[#141414] px-6 py-3 text-sm font-semibold text-[#141414] transition-all hover:bg-[#141414] hover:text-white"
              >
                Conhecer a história
              </Link>
              <a
                href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#141414] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
