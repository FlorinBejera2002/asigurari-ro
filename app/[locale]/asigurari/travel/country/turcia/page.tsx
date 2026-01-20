import { Metadata } from 'next'
import { turciaConfig, metadata as turciaMetadata } from '@/data/travel/turcia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: turciaMetadata.title,
  description: turciaMetadata.description
}

export default function TurciaPage() {
  return <TravelPageLayout config={turciaConfig} excludeCountry="turcia" />
}
