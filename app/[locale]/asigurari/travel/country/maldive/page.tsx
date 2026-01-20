import { Metadata } from 'next'
import { maldiveConfig, metadata as maldiveMetadata } from '@/data/travel/maldive'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: maldiveMetadata.title,
  description: maldiveMetadata.description
}

export default function MaldivePage() {
  return <TravelPageLayout config={maldiveConfig} excludeCountry="maldive" />
}
