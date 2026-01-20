import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, constantaConfig } from '@/data/rca/city/constanta'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function ConstantaPage() {
  return <RCACityPageLayout config={constantaConfig} metadata={cityMetadata} />
}
