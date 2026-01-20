import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, aradConfig } from '@/data/rca/city/arad'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function AradPage() {
  return <RCACityPageLayout config={aradConfig} metadata={cityMetadata} />
}
