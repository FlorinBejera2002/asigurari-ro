import { Metadata } from 'next'
import { mauritiusConfig, metadata as mauritiusMetadata } from '@/data/travel/mauritius'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: mauritiusMetadata.title,
  description: mauritiusMetadata.description
}

export default function MauritiusPage() {
  return <TravelPageLayout config={mauritiusConfig} excludeCountry="mauritius" />
}
