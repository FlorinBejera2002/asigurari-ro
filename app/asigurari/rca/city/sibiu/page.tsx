import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, sibiuConfig } from '@/data/rca/city/sibiu'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function SibiuPage() {
  return <RCACityPageLayout config={sibiuConfig} metadata={cityMetadata} />
}
