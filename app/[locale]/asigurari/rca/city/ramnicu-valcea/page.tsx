import { Metadata } from 'next'
import {
  ramnicuValceaConfig,
  metadata as ramnicuValceaMetadata
} from '@/data/rca/city/ramnicu-valcea'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: ramnicuValceaMetadata.title,
  description: ramnicuValceaMetadata.description
}

export default function RamnicuValceaPage() {
  return (
    <RCACityPageLayout
      config={ramnicuValceaConfig}
      metadata={ramnicuValceaMetadata}
    />
  )
}
