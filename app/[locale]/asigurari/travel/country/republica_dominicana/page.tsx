import { Metadata } from 'next'
import { republica_dominicanaConfig, metadata as republica_dominicanaMetadata } from '@/data/travel/republica_dominicana'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: republica_dominicanaMetadata.title,
  description: republica_dominicanaMetadata.description
}

export default function RepublicaDominicanaPage() {
  return <TravelPageLayout config={republica_dominicanaConfig} excludeCountry="republica_dominicana" />
}
