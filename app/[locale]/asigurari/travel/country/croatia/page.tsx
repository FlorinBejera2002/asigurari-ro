import { Metadata } from 'next'
import { croatiaConfig, metadata as croatiaMetadata } from '@/data/travel/croatia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: croatiaMetadata.title,
  description: croatiaMetadata.description
}

export default function CroatiaPage() {
  return <TravelPageLayout config={croatiaConfig} excludeCountry="croatia" />
}
