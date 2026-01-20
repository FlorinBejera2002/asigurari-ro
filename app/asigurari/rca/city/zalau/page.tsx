import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, zalauConfig } from '@/data/rca/city/zalau'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function ZalauPage() {
  return <RCACityPageLayout config={zalauConfig} metadata={cityMetadata} />
}
