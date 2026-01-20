import { Metadata } from 'next'
import { greciaConfig, metadata as greciaMetadata } from '@/data/travel/grecia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: greciaMetadata.title,
  description: greciaMetadata.description
}

export default function GreciaPage() {
  return <TravelPageLayout config={greciaConfig} excludeCountry="grecia" />
}
