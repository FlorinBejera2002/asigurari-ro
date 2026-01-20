import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, resitaConfig } from '@/data/rca/city/resita'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function ResitaPage() {
  return <RCACityPageLayout config={resitaConfig} metadata={cityMetadata} />
}
