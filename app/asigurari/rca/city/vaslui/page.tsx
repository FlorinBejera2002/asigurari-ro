import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, vasluiConfig } from '@/data/rca/city/vaslui'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function VasluiPage() {
  return <RCACityPageLayout config={vasluiConfig} metadata={cityMetadata} />
}
