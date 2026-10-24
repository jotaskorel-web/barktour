import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { Clock, HeartHandshake, Map, Languages, Sparkles, Compass } from 'lucide-react'

const benefits = [
  {
    id: '1',
    icon: Map,
    title: 'Experiência local',
    description: 'Mais de 30 anos de vivência no turismo de Foz do Iguaçu, Paraguai e Argentina.',
  },
  {
    id: '2',
    icon: HeartHandshake,
    title: 'Entrada sem fila nas Cataratas',
    description:
      'Acesso privativo ao Parque Nacional: sem van compartilhada e sem depender do ônibus da excursão.',
  },
  {
    id: '3',
    icon: Clock,
    title: 'Economia de tempo',
    description: 'Horários e deslocamentos planejados para o dia não se perder em fila e espera.',
  },
  {
    id: '4',
    icon: Languages,
    title: 'Três idiomas',
    description: 'Equipe preparada para atender em português, inglês e espanhol.',
  },
  {
    id: '5',
    icon: Sparkles,
    title: 'Orientação de verdade',
    description: 'Indicação de restaurantes, atrações e a melhor forma de encaixar cada parada.',
  },
  {
    id: '6',
    icon: Compass,
    title: 'Roteiro flexível',
    description: 'Família, casal, amigos ou empresa: o caminho se adapta ao que o grupo quer ver.',
  },
]

export const BenefitsSection: React.FC = () => {
  return (
    <Section className="bg-[#F7F4EE]">
      <SectionTitle
        eyebrow="Diferenciais"
        title="Seu tempo é precioso. Nós sabemos disso."
        subtitle="Você não contrata só um transporte. Contrata quem conhece o destino."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ id, icon: Icon, title, description }, i) => (
          <Reveal key={id} delay={i * 0.06}>
            <Card className="h-full p-8 transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/15">
                <Icon className="h-6 w-6 text-gold-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
