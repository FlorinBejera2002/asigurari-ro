import { Metadata } from 'next'
import {
  otopeniConfig,
  metadata as otopeniMetadata
} from '@/data/rca/city/otopeni'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: otopeniMetadata.title,
  description: otopeniMetadata.description
}

export default function OtopeniPage() {
  return <RCACityPageLayout config={otopeniConfig} metadata={otopeniMetadata} />
}
