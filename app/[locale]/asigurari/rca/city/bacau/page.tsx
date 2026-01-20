import { Metadata } from 'next'
import { bacauConfig, metadata as bacauMetadata } from '@/data/rca/city/bacau'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: bacauMetadata.title,
  description: bacauMetadata.description
}

export default function BacauPage() {
  return <RCACityPageLayout config={bacauConfig} metadata={bacauMetadata} />
}
