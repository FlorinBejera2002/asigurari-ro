import { Metadata } from 'next'
import { zalauConfig, metadata as zalauMetadata } from '@/data/rca/city/zalau'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: zalauMetadata.title,
  description: zalauMetadata.description
}

export default function ZalauPage() {
  return <RCACityPageLayout config={zalauConfig} metadata={zalauMetadata} />
}
