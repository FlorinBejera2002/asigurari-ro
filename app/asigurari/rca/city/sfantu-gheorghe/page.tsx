import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, sfantuGheorgheConfig } from '@/data/rca/city/sfantu-gheorghe'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function SfantuGheorghePage() {
  return <RCACityPageLayout config={sfantuGheorgheConfig} metadata={cityMetadata} />
}
