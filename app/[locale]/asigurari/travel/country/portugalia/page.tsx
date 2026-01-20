import { Metadata } from 'next'
import { portugaliaConfig, metadata as portugaliaMetadata } from '@/data/travel/portugalia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: portugaliaMetadata.title,
  description: portugaliaMetadata.description
}

export default function PortugaliaPage() {
  return <TravelPageLayout config={portugaliaConfig} excludeCountry="portugalia" />
}
