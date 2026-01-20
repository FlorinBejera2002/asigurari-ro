import { Metadata } from 'next'
import { statele_uniteConfig, metadata as statele_uniteMetadata } from '@/data/travel/statele_unite'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: statele_uniteMetadata.title,
  description: statele_uniteMetadata.description
}

export default function StateleUnitePage() {
  return <TravelPageLayout config={statele_uniteConfig} excludeCountry="statele_unite" />
}
