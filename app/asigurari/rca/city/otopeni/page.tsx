import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, otopeniConfig } from '@/data/rca/city/otopeni'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function OtopeniPage() {
  return <RCACityPageLayout config={otopeniConfig} metadata={cityMetadata} />
}
