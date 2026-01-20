import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, navodariConfig } from '@/data/rca/city/navodari'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function NavodariPage() {
  return <RCACityPageLayout config={navodariConfig} metadata={cityMetadata} />
}
