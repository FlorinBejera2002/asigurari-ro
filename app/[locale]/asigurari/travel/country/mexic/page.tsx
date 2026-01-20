import { Metadata } from 'next'
import { mexicConfig, metadata as mexicMetadata } from '@/data/travel/mexic'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: mexicMetadata.title,
  description: mexicMetadata.description
}

export default function MexicPage() {
  return <TravelPageLayout config={mexicConfig} excludeCountry="mexic" />
}
