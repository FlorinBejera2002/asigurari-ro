import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, craiovaConfig } from '@/data/rca/city/craiova'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function CraiovaPage() {
  return <RCACityPageLayout config={craiovaConfig} metadata={cityMetadata} />
}
