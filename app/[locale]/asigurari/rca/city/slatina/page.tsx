import { Metadata } from 'next'
import {
  slatinaConfig,
  metadata as slatinaMetadata
} from '@/data/rca/city/slatina'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: slatinaMetadata.title,
  description: slatinaMetadata.description
}

export default function SlatinaPage() {
  return <RCACityPageLayout config={slatinaConfig} metadata={slatinaMetadata} />
}
