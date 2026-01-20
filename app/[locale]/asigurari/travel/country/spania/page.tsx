import { Metadata } from 'next'
import { spaniaConfig, metadata as spaniaMetadata } from '@/data/travel/spania'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: spaniaMetadata.title,
  description: spaniaMetadata.description
}

export default function SpaniaPage() {
  return <TravelPageLayout config={spaniaConfig} excludeCountry="spania" />
}
