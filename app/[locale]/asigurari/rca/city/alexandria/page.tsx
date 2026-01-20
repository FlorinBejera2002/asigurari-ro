import { Metadata } from 'next'
import {
  alexandriaConfig,
  metadata as alexandriaMetadata
} from '@/data/rca/city/alexandria'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: alexandriaMetadata.title,
  description: alexandriaMetadata.description
}

export default function AlexandriaPage() {
  return (
    <RCACityPageLayout
      config={alexandriaConfig}
      metadata={alexandriaMetadata}
    />
  )
}
