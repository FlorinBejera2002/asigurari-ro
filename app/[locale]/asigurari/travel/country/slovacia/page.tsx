import { Metadata } from 'next'
import { slovaciaConfig, metadata as slovaciaMetadata } from '@/data/travel/slovacia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: slovaciaMetadata.title,
  description: slovaciaMetadata.description
}

export default function SlovaciaPage() {
  return <TravelPageLayout config={slovaciaConfig} excludeCountry="slovacia" />
}
