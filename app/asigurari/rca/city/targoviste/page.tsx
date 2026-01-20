import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, targovisteConfig } from '@/data/rca/city/targoviste'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function TargovistePage() {
  return <RCACityPageLayout config={targovisteConfig} metadata={cityMetadata} />
}
