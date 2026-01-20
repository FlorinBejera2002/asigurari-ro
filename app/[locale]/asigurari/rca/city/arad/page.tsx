import { Metadata } from 'next'
import { aradConfig, metadata as aradMetadata } from '@/data/rca/city/arad'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: aradMetadata.title,
  description: aradMetadata.description
}

export default function AradPage() {
  return <RCACityPageLayout config={aradConfig} metadata={aradMetadata} />
}
