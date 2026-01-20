import { Metadata } from 'next'
import { egiptConfig, metadata as egiptMetadata } from '@/data/travel/egipt'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: egiptMetadata.title,
  description: egiptMetadata.description
}

export default function EgiptPage() {
  return <TravelPageLayout config={egiptConfig} excludeCountry="egipt" />
}
