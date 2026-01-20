import { Metadata } from 'next'
import { lugojConfig, metadata as lugojMetadata } from '@/data/rca/city/lugoj'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: lugojMetadata.title,
  description: lugojMetadata.description
}

export default function LugojPage() {
  return <RCACityPageLayout config={lugojConfig} metadata={lugojMetadata} />
}
