import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, satuMareConfig } from '@/data/rca/city/satu-mare'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function SatuMarePage() {
  return <RCACityPageLayout config={satuMareConfig} metadata={cityMetadata} />
}
