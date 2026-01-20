import { Metadata } from 'next'
import { marea_britanieConfig, metadata as marea_britanieMetadata } from '@/data/travel/marea_britanie'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: marea_britanieMetadata.title,
  description: marea_britanieMetadata.description
}

export default function MareaBritaniePage() {
  return <TravelPageLayout config={marea_britanieConfig} excludeCountry="marea_britanie" />
}
