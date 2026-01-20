import { Metadata } from 'next'
import {
  bistritaConfig,
  metadata as bistritaMetadata
} from '@/data/rca/city/bistrita'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: bistritaMetadata.title,
  description: bistritaMetadata.description
}

export default function BistritaPage() {
  return (
    <RCACityPageLayout config={bistritaConfig} metadata={bistritaMetadata} />
  )
}
