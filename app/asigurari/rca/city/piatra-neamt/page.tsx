import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, piatraNeamtConfig } from '@/data/rca/city/piatra-neamt'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function PiatraNeamtPage() {
  return <RCACityPageLayout config={piatraNeamtConfig} metadata={cityMetadata} />
}
