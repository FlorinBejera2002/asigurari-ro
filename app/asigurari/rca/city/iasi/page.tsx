import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, iasiConfig } from '@/data/rca/city/iasi'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function IasiPage() {
  return <RCACityPageLayout config={iasiConfig} metadata={cityMetadata} />
}
