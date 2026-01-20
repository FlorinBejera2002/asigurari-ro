import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, slatinaConfig } from '@/data/rca/city/slatina'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function SlatinaPage() {
  return <RCACityPageLayout config={slatinaConfig} metadata={cityMetadata} />
}
