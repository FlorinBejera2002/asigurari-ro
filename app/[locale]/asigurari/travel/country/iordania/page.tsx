import { Metadata } from 'next'
import { iordaniaConfig, metadata as iordaniaMetadata } from '@/data/travel/iordania'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: iordaniaMetadata.title,
  description: iordaniaMetadata.description
}

export default function IordaniaPage() {
  return <TravelPageLayout config={iordaniaConfig} excludeCountry="iordania" />
}
