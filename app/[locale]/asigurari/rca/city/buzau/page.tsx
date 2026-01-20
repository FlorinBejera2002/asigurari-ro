import { Metadata } from 'next'
import { buzauConfig, metadata as buzauMetadata } from '@/data/rca/city/buzau'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: buzauMetadata.title,
  description: buzauMetadata.description
}

export default function BuzauPage() {
  return <RCACityPageLayout config={buzauConfig} metadata={buzauMetadata} />
}
