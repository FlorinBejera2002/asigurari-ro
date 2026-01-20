import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, campinaConfig } from '@/data/rca/city/campina'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function CampinaPage() {
  return <RCACityPageLayout config={campinaConfig} metadata={cityMetadata} />
}
