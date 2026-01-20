import { Metadata } from 'next'
import { devaConfig, metadata as devaMetadata } from '@/data/rca/city/deva'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: devaMetadata.title,
  description: devaMetadata.description
}

export default function DevaPage() {
  return <RCACityPageLayout config={devaConfig} metadata={devaMetadata} />
}
