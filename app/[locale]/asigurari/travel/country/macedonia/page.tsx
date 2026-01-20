import { Metadata } from 'next'
import { macedoniaConfig, metadata as macedoniaMetadata } from '@/data/travel/macedonia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: macedoniaMetadata.title,
  description: macedoniaMetadata.description
}

export default function MacedoniaPage() {
  return <TravelPageLayout config={macedoniaConfig} excludeCountry="macedonia" />
}
