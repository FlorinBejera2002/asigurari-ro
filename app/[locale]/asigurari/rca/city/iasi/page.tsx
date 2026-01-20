import { Metadata } from 'next'
import { iasiConfig, metadata as iasiMetadata } from '@/data/rca/city/iasi'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: iasiMetadata.title,
  description: iasiMetadata.description
}

export default function IasiPage() {
  return <RCACityPageLayout config={iasiConfig} metadata={iasiMetadata} />
}
