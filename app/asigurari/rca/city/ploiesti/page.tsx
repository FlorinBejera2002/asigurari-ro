import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, ploiestiConfig } from '@/data/rca/city/ploiesti'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function PloiestiPage() {
  return <RCACityPageLayout config={ploiestiConfig} metadata={cityMetadata} />
}
