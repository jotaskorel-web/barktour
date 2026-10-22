import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section, Grid } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Card, ImagePlaceholder } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { Car, Plane, Map, Camera, ShoppingBag, Compass, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Transporte privativo, transfers, Cataratas, Paraguai, Argentina e roteiros personalizados com a Bark Tour em Foz do Iguaçu.',
}

const services = [
  {
    icon: Car,
    title: 'Transporte privativo',
    image: '/images/frota/fastback-front.jpg',
    description: 'Carros e vans só para o seu grupo, com conforto e o horário combinado com você.',
    href: '/viagens',
  },
  {
    icon: Plane,
    title: 'Transfer aeroporto e hotel',
    image: '/images/instagram/ig-07.jpg',
    description: 'Busca e leva no aeroporto de Foz do Iguaçu ou no hotel, sem van compartilhada.',
    href: '/viagens/transfer-aeroporto',
  },
  {
    icon: Camera,
    title: 'Passeios em Foz',
    image: '/images/hero/cataratas.jpg',
    description: 'Cataratas brasileiras, Parque das Aves, Itaipu, Marco das Três Fronteiras e AquaFoz.',
    href: '/destinos/foz-do-iguacu',
  },
  {
    icon: ShoppingBag,
    title: 'Paraguai',
    image: '/images/destinos/ciudad-del-este-skyline.webp',
    description: 'Compras, Duty Free e acompanhamento na fronteira, no horário que rende mais.',
    href: '/destinos/paraguai',
  },
  {
    icon: Map,
    title: 'Argentina',
    image: '/images/destinos/argentina.jpg',
    description: 'Cataratas argentinas e Puerto Iguazú com a logística da fronteira resolvida.',
    href: '/destinos/argentina',
  },
  {
    icon: Compass,
    title: 'Roteiros personalizados',
    image: '/images/hero/marco-hd.jpg',
    description: 'Famílias, casais, amigos e grupos corporativos. O roteiro segue o interesse de vocês.',
    href: '/viagens/roteiro-triplice-fronteira',
  },
]

const steps = [
  'Você encontra a Bark Tour pelo Google, Instagram ou indicação.',
  'Chama no WhatsApp e conta datas, pessoas, hotel e destinos.',
  'A equipe monta a melhor opção para o grupo.',
  'Você confirma e a Bark Tour busca o grupo no dia.',
]

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-28">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Serviços' }]} />
          <SectionTitle
            eyebrow="Serviços"
            title="Tudo o que você precisa para aproveitar a Tríplice Fronteira."
            subtitle="Turismo receptivo e transporte privativo. Guias em português, inglês e espanhol."
          />

          <Grid cols={3} className="mb-16">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <Card className="group flex h-full flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <ImagePlaceholder src={service.image} alt={service.title} aspectRatio="auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/95 text-gold-700">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                    <p className="mb-4 flex-1 text-sm text-gray-600">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gold-700 transition-all hover:gap-2"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </Grid>

          <div className="mb-16 grid gap-4 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step} className="rounded-xl bg-[#F7F4EE] p-5">
                <p className="mb-2 text-sm font-semibold text-gold-700">0{i + 1}</p>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#141414] px-8 py-12 text-center text-white">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Quer um roteiro sob medida?</h2>
            <p className="mx-auto mb-6 max-w-xl text-gray-300">
              Informe datas, quantidade de pessoas, hotel e o que o grupo quer conhecer.
            </p>
            <a
              href={generateWhatsAppLink(WHATSAPP_MESSAGES.quotation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-[#141414] transition-all hover:bg-[#F7F4EE]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
