import { Metadata } from 'next'
import { cipruConfig, metadata as cipruMetadata } from '@/data/travel/cipru'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: cipruMetadata.title,
  description: cipruMetadata.description
}

export default function CipruPage() {
  return <TravelPageLayout config={cipruConfig} excludeCountry="cipru" />
}
