import { Metadata } from 'next'
import { irlandaConfig, metadata as irlandaMetadata } from '@/data/travel/irlanda'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: irlandaMetadata.title,
  description: irlandaMetadata.description
}

export default function IrlandaPage() {
  return <TravelPageLayout config={irlandaConfig} excludeCountry="irlanda" />
}
