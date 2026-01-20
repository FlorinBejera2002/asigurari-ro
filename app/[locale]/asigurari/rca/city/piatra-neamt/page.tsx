import { Metadata } from 'next'
import {
  piatraNeamtConfig,
  metadata as piatraNeamtMetadata
} from '@/data/rca/city/piatra-neamt'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: piatraNeamtMetadata.title,
  description: piatraNeamtMetadata.description
}

export default function PiatraNeamtPage() {
  return (
    <RCACityPageLayout
      config={piatraNeamtConfig}
      metadata={piatraNeamtMetadata}
    />
  )
}
