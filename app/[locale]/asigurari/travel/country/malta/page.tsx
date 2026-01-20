import { Metadata } from 'next'
import { maltaConfig, metadata as maltaMetadata } from '@/data/travel/malta'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: maltaMetadata.title,
  description: maltaMetadata.description
}

export default function MaltaPage() {
  return <TravelPageLayout config={maltaConfig} excludeCountry="malta" />
}
