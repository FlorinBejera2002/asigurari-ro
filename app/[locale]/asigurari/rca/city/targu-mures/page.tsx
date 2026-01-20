import { Metadata } from 'next'
import {
  targuMuresConfig,
  metadata as targuMuresMetadata
} from '@/data/rca/city/targu-mures'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: targuMuresMetadata.title,
  description: targuMuresMetadata.description
}

export default function TarguMuresPage() {
  return (
    <RCACityPageLayout
      config={targuMuresConfig}
      metadata={targuMuresMetadata}
    />
  )
}
