import { Metadata } from 'next'
import { ungariaConfig, metadata as ungariaMetadata } from '@/data/travel/ungaria'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: ungariaMetadata.title,
  description: ungariaMetadata.description
}

export default function UngariaPage() {
  return <TravelPageLayout config={ungariaConfig} excludeCountry="ungaria" />
}
