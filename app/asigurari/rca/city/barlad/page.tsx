import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, barladConfig } from '@/data/rca/city/barlad'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BarladPage() {
  return <RCACityPageLayout config={barladConfig} metadata={cityMetadata} />
}
