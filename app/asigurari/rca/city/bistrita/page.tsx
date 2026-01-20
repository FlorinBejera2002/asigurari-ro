import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, bistritaConfig } from '@/data/rca/city/bistrita'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BistritaPage() {
  return <RCACityPageLayout config={bistritaConfig} metadata={cityMetadata} />
}
