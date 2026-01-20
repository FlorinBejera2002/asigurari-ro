import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, pitestiConfig } from '@/data/rca/city/pitesti'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function PitestiPage() {
  return <RCACityPageLayout config={pitestiConfig} metadata={cityMetadata} />
}
