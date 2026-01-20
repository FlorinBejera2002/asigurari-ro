import { Metadata } from 'next'
import { danemarcaConfig, metadata as danemarcaMetadata } from '@/data/travel/danemarca'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: danemarcaMetadata.title,
  description: danemarcaMetadata.description
}

export default function DanemarcaPage() {
  return <TravelPageLayout config={danemarcaConfig} excludeCountry="danemarca" />
}
