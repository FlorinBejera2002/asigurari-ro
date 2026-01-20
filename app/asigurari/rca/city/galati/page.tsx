import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, galatiConfig } from '@/data/rca/city/galati'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function GalatiPage() {
  return <RCACityPageLayout config={galatiConfig} metadata={cityMetadata} />
}
