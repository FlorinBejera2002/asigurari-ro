import { Metadata } from 'next'
import { cubaConfig, metadata as cubaMetadata } from '@/data/travel/cuba'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: cubaMetadata.title,
  description: cubaMetadata.description
}

export default function CubaPage() {
  return <TravelPageLayout config={cubaConfig} excludeCountry="cuba" />
}
