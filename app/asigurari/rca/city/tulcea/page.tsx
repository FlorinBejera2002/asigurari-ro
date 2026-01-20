import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, tulceaConfig } from '@/data/rca/city/tulcea'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function TulceaPage() {
  return <RCACityPageLayout config={tulceaConfig} metadata={cityMetadata} />
}
