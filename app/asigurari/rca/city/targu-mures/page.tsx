import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, targuMuresConfig } from '@/data/rca/city/targu-mures'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function TarguMuresPage() {
  return <RCACityPageLayout config={targuMuresConfig} metadata={cityMetadata} />
}
