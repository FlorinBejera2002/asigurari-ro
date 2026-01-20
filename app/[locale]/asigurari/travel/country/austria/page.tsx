import { Metadata } from 'next'
import { austriaConfig, metadata as austriaMetadata } from '@/data/travel/austria'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: austriaMetadata.title,
  description: austriaMetadata.description
}

export default function AustriaPage() {
  return <TravelPageLayout config={austriaConfig} excludeCountry="austria" />
}
