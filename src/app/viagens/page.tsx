import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { TripsExplorer } from '@/components/trips/TripsExplorer'
import { trips } from '@/data'

export const metadata: Metadata = {
  title: 'Roteiros privativos',
  description:
    'Cataratas, Paraguai, Argentina e transfers com a Bark Tour. Roteiros privativos em Foz do Iguaçu, no horário do seu grupo.',
}

export default function ViagensPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-28">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Roteiros' }]} />
          <SectionTitle
            eyebrow="Roteiros"
            title="Monte a experiência do seu grupo"
            subtitle="Cataratas, Paraguai, Argentina e transfers. O valor é combinado conforme datas e número de pessoas."
          />
          <TripsExplorer trips={trips} />
        </Section>
      </main>
      <Footer />
    </>
  )
}
