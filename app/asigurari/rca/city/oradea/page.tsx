import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, oradeaConfig } from '@/data/rca/city/oradea'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function OradeaPage() {
  return <RCACityPageLayout config={oradeaConfig} metadata={cityMetadata} />
}
