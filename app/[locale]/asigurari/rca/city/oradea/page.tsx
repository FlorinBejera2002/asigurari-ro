import { Metadata } from 'next'
import {
  oradeaConfig,
  metadata as oradeaMetadata
} from '@/data/rca/city/oradea'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: oradeaMetadata.title,
  description: oradeaMetadata.description
}

export default function OradeaPage() {
  return <RCACityPageLayout config={oradeaConfig} metadata={oradeaMetadata} />
}
