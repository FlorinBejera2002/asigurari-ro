import { Metadata } from 'next'
import { tunisiaConfig, metadata as tunisiaMetadata } from '@/data/travel/tunisia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: tunisiaMetadata.title,
  description: tunisiaMetadata.description
}

export default function TunisiaPage() {
  return <TravelPageLayout config={tunisiaConfig} excludeCountry="tunisia" />
}
