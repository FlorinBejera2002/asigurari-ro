import { Metadata } from 'next'
import { turdaConfig, metadata as turdaMetadata } from '@/data/rca/city/turda'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: turdaMetadata.title,
  description: turdaMetadata.description
}

export default function TurdaPage() {
  return <RCACityPageLayout config={turdaConfig} metadata={turdaMetadata} />
}
