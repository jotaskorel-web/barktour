import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Layout'
import { CONTACT, generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'

const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Destinos', href: '/destinos' },
  { label: 'Roteiros', href: '/viagens' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

const destinationLinks = [
  { label: 'Foz do Iguaçu', href: '/destinos/foz-do-iguacu' },
  { label: 'Paraguai', href: '/destinos/paraguai' },
  { label: 'Argentina', href: '/destinos/argentina' },
  { label: 'Cataratas brasileiras', href: '/viagens/cataratas-brasileiras' },
  { label: 'Transfer aeroporto', href: '/viagens/transfer-aeroporto' },
]

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0B] text-gray-100">
      <div className="border-b border-white/10">
        <Container className="py-12">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
            <div>
              <div className="relative mx-auto mb-4 h-14 w-16 md:mx-0">
                <Image
                  src="/logo-bt-only.png"
                  alt="BT — Bark Tour"
                  fill
                  sizes="112px"
                  className="object-contain object-center md:object-left"
                />
              </div>
              <p className="mb-4 text-gray-400">
                Transporte privativo e roteiros na Tríplice Fronteira. Experiências que conectam
                destinos.
              </p>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-gold-500 hover:text-[#141414]"
                aria-label="Instagram da Bark Tour"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Navegação</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 transition-colors hover:text-gold-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Destinos</h4>
              <ul className="space-y-2">
                {destinationLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 transition-colors hover:text-gold-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start justify-center gap-2 md:justify-start">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                  <a
                    href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-gold-400"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start justify-center gap-2 md:justify-start">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                  <a href={`mailto:${CONTACT.email}`} className="text-gray-400 transition-colors hover:text-gold-400">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start justify-center gap-2 md:justify-start">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                  <span className="text-gray-400">{CONTACT.address.full}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>
            &copy; {currentYear} Bark Tour. CNPJ {CONTACT.cnpj}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-gold-400">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-gold-400">
              Termos de Uso
            </Link>
          </div>
          <p>Foz do Iguaçu · Tríplice Fronteira</p>
        </div>
      </Container>
    </footer>
  )
}
