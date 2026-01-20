import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, sloboziaConfig } from '@/data/rca/city/slobozia'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function SloboziaPage() {
  return <RCACityPageLayout config={sloboziaConfig} metadata={cityMetadata} />
}
