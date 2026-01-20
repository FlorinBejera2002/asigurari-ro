import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, brasovConfig } from '@/data/rca/city/brasov'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BrasovPage() {
  return <RCACityPageLayout config={brasovConfig} metadata={cityMetadata} />
}
