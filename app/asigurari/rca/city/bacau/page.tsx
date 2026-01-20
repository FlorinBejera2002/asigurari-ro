import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, bacauConfig } from '@/data/rca/city/bacau'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BacauPage() {
  return <RCACityPageLayout config={bacauConfig} metadata={cityMetadata} />
}
