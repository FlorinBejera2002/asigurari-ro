import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, albaIuliaConfig } from '@/data/rca/city/alba-iulia'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function AlbaIuliaPage() {
  return <RCACityPageLayout config={albaIuliaConfig} metadata={cityMetadata} />
}
