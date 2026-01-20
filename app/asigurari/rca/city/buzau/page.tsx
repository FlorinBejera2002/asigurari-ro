import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, buzauConfig } from '@/data/rca/city/buzau'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BuzauPage() {
  return <RCACityPageLayout config={buzauConfig} metadata={cityMetadata} />
}
