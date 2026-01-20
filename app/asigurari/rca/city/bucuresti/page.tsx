import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, bucurestiConfig } from '@/data/rca/city/bucuresti'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BucurestiPage() {
  return <RCACityPageLayout config={bucurestiConfig} metadata={cityMetadata} />
}
