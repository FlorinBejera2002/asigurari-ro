import { Metadata } from 'next'
import {
  craiovaConfig,
  metadata as craiovaMetadata
} from '@/data/rca/city/craiova'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: craiovaMetadata.title,
  description: craiovaMetadata.description
}

export default function CraiovaPage() {
  return <RCACityPageLayout config={craiovaConfig} metadata={craiovaMetadata} />
}
