import { Metadata } from 'next'
import {
  targovisteConfig,
  metadata as targovisteMetadata
} from '@/data/rca/city/targoviste'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: targovisteMetadata.title,
  description: targovisteMetadata.description
}

export default function TargovistePage() {
  return (
    <RCACityPageLayout
      config={targovisteConfig}
      metadata={targovisteMetadata}
    />
  )
}
