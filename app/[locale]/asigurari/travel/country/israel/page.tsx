import { Metadata } from 'next'
import { israelConfig, metadata as israelMetadata } from '@/data/travel/israel'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: israelMetadata.title,
  description: israelMetadata.description
}

export default function IsraelPage() {
  return <TravelPageLayout config={israelConfig} excludeCountry="israel" />
}
