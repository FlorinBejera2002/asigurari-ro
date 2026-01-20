import { Metadata } from 'next'
import { serbiaConfig, metadata as serbiaMetadata } from '@/data/travel/serbia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: serbiaMetadata.title,
  description: serbiaMetadata.description
}

export default function SerbiaPage() {
  return <TravelPageLayout config={serbiaConfig} excludeCountry="serbia" />
}
