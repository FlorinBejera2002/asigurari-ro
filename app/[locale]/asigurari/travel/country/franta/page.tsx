import { Metadata } from 'next'
import { frantaConfig, metadata as frantaMetadata } from '@/data/travel/franta'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: frantaMetadata.title,
  description: frantaMetadata.description
}

export default function FrantaPage() {
  return <TravelPageLayout config={frantaConfig} excludeCountry="franta" />
}
