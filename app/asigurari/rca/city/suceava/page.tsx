import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, suceavaConfig } from '@/data/rca/city/suceava'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function SuceavaPage() {
  return <RCACityPageLayout config={suceavaConfig} metadata={cityMetadata} />
}
