import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, oravitaConfig } from '@/data/rca/city/oravita'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function OravitaPage() {
  return <RCACityPageLayout config={oravitaConfig} metadata={cityMetadata} />
}
