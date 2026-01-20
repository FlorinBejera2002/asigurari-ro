import { Metadata } from 'next'
import { ucrainaConfig, metadata as ucrainaMetadata } from '@/data/travel/ucraina'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: ucrainaMetadata.title,
  description: ucrainaMetadata.description
}

export default function UcrainaPage() {
  return <TravelPageLayout config={ucrainaConfig} excludeCountry="ucraina" />
}
