import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { CONTACT } from '@/config/contact'
import { Star } from 'lucide-react'

export const TestimonialsSection: React.FC = () => {
  return (
    <Section id="depoimentos" className="bg-[#F7F4EE]">
      <SectionTitle
        eyebrow="Avaliações"
        title="Quem viaja com a Bark Tour, recomenda."
        subtitle="Confira as experiências de quem já conheceu a Tríplice Fronteira com a Bark Tour."
      />

      <div className="mx-auto max-w-xl rounded-2xl bg-white px-8 py-10 text-center shadow-sm ring-1 ring-black/5">
        <div className="mb-3 flex justify-center gap-1 text-gold-500" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="text-5xl font-bold text-[#141414]">{CONTACT.googleRating}</p>
        <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gold-700">
          Nota no Google · {CONTACT.googleReviewCount} avaliações
        </p>
        <p className="mx-auto mt-5 max-w-md text-gray-600">
          As avaliações públicas estão no Google. Não publicamos comentários sem o texto original
          do cliente.
        </p>
        <a
          href={CONTACT.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-lg bg-[#141414] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-700"
        >
          Ver avaliações no Google
        </a>
      </div>
    </Section>
  )
}
