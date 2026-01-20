import { Metadata } from 'next'
import {
  vasluiConfig,
  metadata as vasluiMetadata
} from '@/data/rca/city/vaslui'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: vasluiMetadata.title,
  description: vasluiMetadata.description
}

export default function VasluiPage() {
  return <RCACityPageLayout config={vasluiConfig} metadata={vasluiMetadata} />
}
