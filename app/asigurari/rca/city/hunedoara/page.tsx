import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, hunedoaraConfig } from '@/data/rca/city/hunedoara'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function HunedoaraPage() {
  return <RCACityPageLayout config={hunedoaraConfig} metadata={cityMetadata} />
}
