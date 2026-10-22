// Contato oficial da Bark Tour.
// Todos os CTAs de WhatsApp do site devem usar generateWhatsAppLink() daqui.

export const SITE_NAME = 'Bark Tour'
/** Atualize quando o domínio oficial estiver publicado. */
export const SITE_URL = 'https://barktour.com.br'

export const CONTACT = {
  whatsappPrimary: '5545991496118',
  phoneDisplay: '(45) 99149-6118',
  instagram: '@barktour_foz',
  instagramUrl: 'https://www.instagram.com/barktour_foz/',
  email: 'barkgiovanni@gmail.com',
  cnpj: '55.802.195/0001-85',
  googleRating: '5,0',
  googleReviewCount: 18,
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Barktour+Rua+Natal+Graciotin+Foz+do+Igua%C3%A7u',
  address: {
    street: 'Rua Natal Graciotin, 500',
    neighborhood: 'Vila Shalom',
    city: 'Foz do Iguaçu',
    state: 'PR',
    country: 'Brasil',
    full: 'Rua Natal Graciotin, 500 — Vila Shalom — Foz do Iguaçu/PR',
  },
  businessHours: {
    note: 'Atendimento pelo WhatsApp para montar o roteiro no horário do seu grupo.',
  },
} as const

export const generateWhatsAppLink = (
  message: string,
  phone: string = CONTACT.whatsappPrimary
): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_MESSAGES = {
  hero: 'Olá! Vi o site da Bark Tour e quero montar um roteiro privativo em Foz do Iguaçu, Paraguai ou Argentina.',
  general:
    'Olá! Conheci a Bark Tour pelo site e gostaria de informações sobre transporte privativo e roteiros na Tríplice Fronteira.',
  quotation:
    'Olá! Quero um orçamento com a Bark Tour. Vou informar datas, número de pessoas, hotel e o que queremos conhecer.',
  destination: (destination: string) =>
    `Olá! Estava vendo ${destination} no site da Bark Tour e gostaria de um roteiro privativo.`,
  trip: (destination: string) =>
    `Olá! Vi no site da Bark Tour o roteiro de ${destination} e gostaria de mais informações.`,
  tripReserve: (title: string) =>
    `Olá! Vi no site da Bark Tour "${title}" e gostaria de receber um orçamento.`,
}

export const formatBRL = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
