import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, alexandriaConfig } from '@/data/rca/city/alexandria'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function AlexandriaPage() {
  return <RCACityPageLayout config={alexandriaConfig} metadata={cityMetadata} />
}
