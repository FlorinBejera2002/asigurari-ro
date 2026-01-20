import { Metadata } from 'next'
import { dubaiConfig, metadata as dubaiMetadata } from '@/data/travel/dubai'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: dubaiMetadata.title,
  description: dubaiMetadata.description
}

export default function DubaiPage() {
  return <TravelPageLayout config={dubaiConfig} excludeCountry="dubai" />
}
