import { Metadata } from 'next'
import { groenlandaConfig, metadata as groenlandaMetadata } from '@/data/travel/groenlanda'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: groenlandaMetadata.title,
  description: groenlandaMetadata.description
}

export default function GroenlandaPage() {
  return <TravelPageLayout config={groenlandaConfig} excludeCountry="groenlanda" />
}
