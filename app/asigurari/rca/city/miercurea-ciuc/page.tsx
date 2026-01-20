import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, miercureaCiucConfig } from '@/data/rca/city/miercurea-ciuc'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function MiercureaCiucPage() {
  return <RCACityPageLayout config={miercureaCiucConfig} metadata={cityMetadata} />
}
