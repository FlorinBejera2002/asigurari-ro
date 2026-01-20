import { Metadata } from 'next'
import { olandaConfig, metadata as olandaMetadata } from '@/data/travel/olanda'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: olandaMetadata.title,
  description: olandaMetadata.description
}

export default function OlandaPage() {
  return <TravelPageLayout config={olandaConfig} excludeCountry="olanda" />
}
