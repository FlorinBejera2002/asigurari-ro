import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, giurgiuConfig } from '@/data/rca/city/giurgiu'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function GiurgiuPage() {
  return <RCACityPageLayout config={giurgiuConfig} metadata={cityMetadata} />
}
