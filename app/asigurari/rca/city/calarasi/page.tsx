import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, calarasisConfig } from '@/data/rca/city/calarasi'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function CalarasiPage() {
  return <RCACityPageLayout config={calarasisConfig} metadata={cityMetadata} />
}
