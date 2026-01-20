import { Metadata } from 'next'
import { albaniaConfig, metadata as albaniaMetadata } from '@/data/travel/albania'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: albaniaMetadata.title,
  description: albaniaMetadata.description
}

export default function AlbaniaPage() {
  return <TravelPageLayout config={albaniaConfig} excludeCountry="albania" />
}
