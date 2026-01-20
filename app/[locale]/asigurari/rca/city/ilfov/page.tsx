import { Metadata } from 'next'
import { ilfovConfig, metadata as ilfovMetadata } from '@/data/rca/city/ilfov'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: ilfovMetadata.title,
  description: ilfovMetadata.description
}

export default function IlfovPage() {
  return <RCACityPageLayout config={ilfovConfig} metadata={ilfovMetadata} />
}
