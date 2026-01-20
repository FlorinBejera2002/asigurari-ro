import { Metadata } from 'next'
import { cehiaConfig, metadata as cehiaMetadata } from '@/data/travel/cehia'
import TravelPageLayout from '../../components/TravelPageLayout'

export const metadata: Metadata = {
  title: cehiaMetadata.title,
  description: cehiaMetadata.description
}

export default function CehiaPage() {
  return <TravelPageLayout config={cehiaConfig} excludeCountry="cehia" />
}
