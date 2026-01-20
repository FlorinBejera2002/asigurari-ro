import { Metadata } from 'next'
import { elvetiaConfig, metadata as elvetiaMetadata } from '@/data/travel/elvetia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: elvetiaMetadata.title,
  description: elvetiaMetadata.description
}

export default function ElvetiaPage() {
  return <TravelPageLayout config={elvetiaConfig} excludeCountry="elvetia" />
}
