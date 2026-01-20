import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, lugojConfig } from '@/data/rca/city/lugoj'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function LugojPage() {
  return <RCACityPageLayout config={lugojConfig} metadata={cityMetadata} />
}
