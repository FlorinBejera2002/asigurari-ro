import { Metadata } from 'next'
import {
  brailaConfig,
  metadata as brailaMetadata
} from '@/data/rca/city/braila'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: brailaMetadata.title,
  description: brailaMetadata.description
}

export default function BrailaPage() {
  return <RCACityPageLayout config={brailaConfig} metadata={brailaMetadata} />
}
