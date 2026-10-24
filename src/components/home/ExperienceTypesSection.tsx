import Link from 'next/link'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Card, ImagePlaceholder } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'

const experienceTypes = [
  {
    id: '1',
    title: 'Transporte privativo',
    description: 'Carros e vans só para o seu grupo',
    image: '/images/frota/fastback-front.jpg',
    href: '/servicos',
  },
  {
    id: '2',
    title: 'Cataratas',
    description: 'Entrada sem fila, sem ônibus de excursão',
    image: '/images/hero/cataratas-br-hq.jpg',
    href: '/viagens/cataratas-brasileiras',
  },
  {
    id: '3',
    title: 'Paraguai',
    description: 'New Zone, Shopping China e acompanhamento',
    image: '/images/passeios/new-zone-hq.jpg',
    href: '/viagens/new-zone-shopping-china',
  },
  {
    id: '4',
    title: 'Argentina',
    description: 'Puerto Iguazú, By Night e as quedas',
    image: '/images/destinos/argentina.jpg',
    href: '/viagens/by-night-argentina',
  },
  {
    id: '5',
    title: 'Transfer',
    description: 'Aeroporto, hotel e recepção do grupo',
    image: '/images/instagram/ig-07.jpg',
    href: '/viagens/transfer-aeroporto',
  },
  {
    id: '6',
    title: 'Dreams',
    description: 'Dreamland e Dreams Park Show',
    image: '/images/passeios/dreams-pele.jpg',
    href: '/viagens/dreams',
  },
]

export const ExperienceTypesSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-gold-500/10 to-white">
      <SectionTitle
        eyebrow="Serviços"
        title="Tudo o que você precisa para aproveitar a Tríplice Fronteira."
        subtitle="Transporte privativo, passeios e roteiros sob medida. Sem excursão tradicional."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {experienceTypes.map((type, i) => (
          <Reveal key={type.id} delay={i * 0.06}>
            <Link href={type.href}>
              <Card className="group relative h-56 overflow-hidden">
                <ImagePlaceholder src={type.image} alt={type.title} aspectRatio="auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-colors group-hover:from-black/85" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-bold">{type.title}</h3>
                  <p className="text-sm text-gray-200">{type.description}</p>
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
