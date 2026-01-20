import { Metadata } from 'next'
import { marocConfig, metadata as marocMetadata } from '@/data/travel/maroc'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: marocMetadata.title,
  description: marocMetadata.description
}

export default function MarocPage() {
  return <TravelPageLayout config={marocConfig} excludeCountry="maroc" />
}
