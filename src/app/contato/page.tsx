import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ContactForm } from '@/components/contact/ContactForm'
import { MessageCircle, MapPin, Mail, Instagram } from 'lucide-react'
import { CONTACT, generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Bark Tour pelo WhatsApp, e-mail ou Instagram. Roteiros privativos em Foz do Iguaçu, Paraguai e Argentina.',
}

export default function ContatoPage() {
  type InfoItem = {
    icon: typeof MessageCircle
    title: string
    lines: { text: string; href?: string }[]
    note?: string
  }
  const infoItems: InfoItem[] = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      lines: [{ text: CONTACT.phoneDisplay, href: generateWhatsAppLink(WHATSAPP_MESSAGES.general) }],
      note: 'Canal principal para orçamento e roteiro',
    },
    {
      icon: Mail,
      title: 'E-mail',
      lines: [{ text: CONTACT.email, href: `mailto:${CONTACT.email}` }],
      note: `CNPJ ${CONTACT.cnpj}`,
    },
    {
      icon: Instagram,
      title: 'Instagram',
      lines: [{ text: CONTACT.instagram, href: CONTACT.instagramUrl }],
      note: 'Cataratas, grupos e o dia a dia da equipe',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      lines: [{ text: CONTACT.address.full }],
      note: CONTACT.businessHours.note,
    },
  ]

  return (
    <>
      <Header />
      <main>
        <Section className="pt-28">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Contato' }]} />
          <SectionTitle
            eyebrow="Contato"
            title="Vamos montar o seu roteiro?"
            subtitle="Conte datas, número de pessoas, hotel e o que o grupo quer conhecer."
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Info */}
            <div className="space-y-8 lg:col-span-1">
              {infoItems.map(({ icon: Icon, title, lines, note }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">{title}</h3>
                    {lines.map((line, i) =>
                      line.href ? (
                        <a
                          key={i}
                          href={line.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-medium text-gold-700 hover:underline"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-700">
                          {line.text}
                        </p>
                      )
                    )}
                    {note && <p className="mt-1 text-sm text-gray-500">{note}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-gray-50 p-8">
                <h3 className="mb-6 text-2xl font-bold">Envie uma mensagem</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
