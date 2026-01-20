import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, victoriaConfig } from '@/data/rca/city/victoria'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function VictoriaPage() {
  return <RCACityPageLayout config={victoriaConfig} metadata={cityMetadata} />
}
