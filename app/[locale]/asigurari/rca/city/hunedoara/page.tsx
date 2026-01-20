import { Metadata } from 'next'
import {
  hunedoaraConfig,
  metadata as hunedoaraMetadata
} from '@/data/rca/city/hunedoara'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: hunedoaraMetadata.title,
  description: hunedoaraMetadata.description
}

export default function HunedoaraPage() {
  return (
    <RCACityPageLayout config={hunedoaraConfig} metadata={hunedoaraMetadata} />
  )
}
