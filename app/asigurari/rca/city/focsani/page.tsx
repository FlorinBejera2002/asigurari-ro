import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, focsaniConfig } from '@/data/rca/city/focsani'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function FocsaniPage() {
  return <RCACityPageLayout config={focsaniConfig} metadata={cityMetadata} />
}
