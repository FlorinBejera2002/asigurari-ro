import { Metadata } from 'next'
import { romanConfig, metadata as romanMetadata } from '@/data/rca/city/roman'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: romanMetadata.title,
  description: romanMetadata.description
}

export default function RomanPage() {
  return <RCACityPageLayout config={romanConfig} metadata={romanMetadata} />
}
