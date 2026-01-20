import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, ilfovConfig } from '@/data/rca/city/ilfov'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function IlfovPage() {
  return <RCACityPageLayout config={ilfovConfig} metadata={cityMetadata} />
}
