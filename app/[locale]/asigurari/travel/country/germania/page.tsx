import { Metadata } from 'next'
import { germaniaConfig, metadata as germaniaMetadata } from '@/data/travel/germania'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: germaniaMetadata.title,
  description: germaniaMetadata.description
}

export default function GermaniaPage() {
  return <TravelPageLayout config={germaniaConfig} excludeCountry="germania" />
}
