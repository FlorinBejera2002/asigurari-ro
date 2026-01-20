import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, mangaliaConfig } from '@/data/rca/city/mangalia'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function MangaliaPage() {
  return <RCACityPageLayout config={mangaliaConfig} metadata={cityMetadata} />
}
