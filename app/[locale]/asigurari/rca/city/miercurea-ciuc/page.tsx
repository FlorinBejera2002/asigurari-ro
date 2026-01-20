import { Metadata } from 'next'
import {
  miercureaCiucConfig,
  metadata as miercureaCiucMetadata
} from '@/data/rca/city/miercurea-ciuc'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: miercureaCiucMetadata.title,
  description: miercureaCiucMetadata.description
}

export default function MiercureaCiucPage() {
  return (
    <RCACityPageLayout
      config={miercureaCiucConfig}
      metadata={miercureaCiucMetadata}
    />
  )
}
