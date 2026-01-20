import { Metadata } from 'next'
import {
  sfantuGheorgheConfig,
  metadata as sfantuGheorgheMetadata
} from '@/data/rca/city/sfantu-gheorghe'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: sfantuGheorgheMetadata.title,
  description: sfantuGheorgheMetadata.description
}

export default function SfantuGheorghePage() {
  return (
    <RCACityPageLayout
      config={sfantuGheorgheConfig}
      metadata={sfantuGheorgheMetadata}
    />
  )
}
