import { Metadata } from 'next'
import { italiaConfig, metadata as italiaMetadata } from '@/data/travel/italia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: italiaMetadata.title,
  description: italiaMetadata.description
}

export default function ItaliaPage() {
  return <TravelPageLayout config={italiaConfig} excludeCountry="italia" />
}
