'use client'

import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { CardsCarousel } from '@/components/ui/CardsCarousel'
import { TripCard } from '@/components/trips/TripCard'
import { trips } from '@/data'

export const TripsSection: React.FC = () => {
  const packages = [...trips].sort(
    (a, b) => Number(b.promo) - Number(a.promo) || Number(!!b.price) - Number(!!a.price)
  )

  return (
    <Section id="trips" className="bg-gray-50">
      <SectionTitle
        eyebrow="Experiência"
        title="Conhecimento local que faz diferença na sua viagem."
        subtitle="Roteiros privativos para montar do seu jeito. Valores sob consulta, de acordo com datas e tamanho do grupo."
      />

      <div className="mb-12">
        <CardsCarousel
          items={packages}
          getKey={(trip) => trip.id}
          ariaLabel="Pacotes de viagem"
          prevLabel="Pacotes anteriores"
          nextLabel="Próximos pacotes"
          renderItem={(trip) => <TripCard trip={trip} />}
        />
      </div>

      <div className="text-center">
        <Button href="/viagens" variant="primary" size="lg">
          Ver roteiros
        </Button>
      </div>
    </Section>
  )
}
