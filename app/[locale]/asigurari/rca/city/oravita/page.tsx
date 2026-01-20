import { Metadata } from 'next'
import {
  oravitaConfig,
  metadata as oravitaMetadata
} from '@/data/rca/city/oravita'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: oravitaMetadata.title,
  description: oravitaMetadata.description
}

export default function OravitaPage() {
  return <RCACityPageLayout config={oravitaConfig} metadata={oravitaMetadata} />
}
