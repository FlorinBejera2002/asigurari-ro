import { Metadata } from 'next'
import { poloniaConfig, metadata as poloniaMetadata } from '@/data/travel/polonia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: poloniaMetadata.title,
  description: poloniaMetadata.description
}

export default function PoloniaPage() {
  return <TravelPageLayout config={poloniaConfig} excludeCountry="polonia" />
}
