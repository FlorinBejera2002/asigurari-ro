import { Metadata } from 'next'
import { bulgariaConfig, metadata as bulgariaMetadata } from '@/data/travel/bulgaria'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: bulgariaMetadata.title,
  description: bulgariaMetadata.description
}

export default function BulgariaPage() {
  return <TravelPageLayout config={bulgariaConfig} excludeCountry="bulgaria" />
}
