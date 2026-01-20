import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, brailaConfig } from '@/data/rca/city/braila'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BrailaPage() {
  return <RCACityPageLayout config={brailaConfig} metadata={cityMetadata} />
}
