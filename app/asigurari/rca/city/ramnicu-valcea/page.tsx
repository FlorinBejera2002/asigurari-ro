import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, ramnicuValceaConfig } from '@/data/rca/city/ramnicu-valcea'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function RamnicuValceaPage() {
  return <RCACityPageLayout config={ramnicuValceaConfig} metadata={cityMetadata} />
}
