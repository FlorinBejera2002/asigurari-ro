import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, baiaMareConfig } from '@/data/rca/city/baia-mare'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BaiaMarePage() {
  return <RCACityPageLayout config={baiaMareConfig} metadata={cityMetadata} />
}
