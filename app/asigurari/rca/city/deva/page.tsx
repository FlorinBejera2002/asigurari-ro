import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, devaConfig } from '@/data/rca/city/deva'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function DevaPage() {
  return <RCACityPageLayout config={devaConfig} metadata={cityMetadata} />
}
