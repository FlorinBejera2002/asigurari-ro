import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, turdaConfig } from '@/data/rca/city/turda'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function TurdaPage() {
  return <RCACityPageLayout config={turdaConfig} metadata={cityMetadata} />
}
