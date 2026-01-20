import { Metadata } from 'next'
import { republica_moldovaConfig, metadata as republica_moldovaMetadata } from '@/data/travel/republica_moldova'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: republica_moldovaMetadata.title,
  description: republica_moldovaMetadata.description
}

export default function RepublicaMoldovaPage() {
  return <TravelPageLayout config={republica_moldovaConfig} excludeCountry="republica_moldova" />
}
