import { Metadata } from 'next'
import { thailandaConfig, metadata as thailandaMetadata } from '@/data/travel/thailanda'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: thailandaMetadata.title,
  description: thailandaMetadata.description
}

export default function ThailandaPage() {
  return <TravelPageLayout config={thailandaConfig} excludeCountry="thailanda" />
}
