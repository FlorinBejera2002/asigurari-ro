import { Metadata } from 'next'
import { suediaConfig, metadata as suediaMetadata } from '@/data/travel/suedia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: suediaMetadata.title,
  description: suediaMetadata.description
}

export default function SuediaPage() {
  return <TravelPageLayout config={suediaConfig} excludeCountry="suedia" />
}
