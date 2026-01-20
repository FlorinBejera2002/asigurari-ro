import { Metadata } from 'next'
import { sibiuConfig, metadata as sibiuMetadata } from '@/data/rca/city/sibiu'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: sibiuMetadata.title,
  description: sibiuMetadata.description
}

export default function SibiuPage() {
  return <RCACityPageLayout config={sibiuConfig} metadata={sibiuMetadata} />
}
