import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, romanConfig } from '@/data/rca/city/roman'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function RomanPage() {
  return <RCACityPageLayout config={romanConfig} metadata={cityMetadata} />
}
