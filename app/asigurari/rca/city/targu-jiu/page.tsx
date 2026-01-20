import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, targuJiuConfig } from '@/data/rca/city/targu-jiu'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function TarguJiuPage() {
  return <RCACityPageLayout config={targuJiuConfig} metadata={cityMetadata} />
}
