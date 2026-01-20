import { Metadata } from 'next'
import { zanzibarConfig, metadata as zanzibarMetadata } from '@/data/travel/zanzibar'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: zanzibarMetadata.title,
  description: zanzibarMetadata.description
}

export default function ZanzibarPage() {
  return <TravelPageLayout config={zanzibarConfig} excludeCountry="zanzibar" />
}
