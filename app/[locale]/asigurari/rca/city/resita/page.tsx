import { Metadata } from 'next'
import {
  resitaConfig,
  metadata as resitaMetadata
} from '@/data/rca/city/resita'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: resitaMetadata.title,
  description: resitaMetadata.description
}

export default function ResitaPage() {
  return <RCACityPageLayout config={resitaConfig} metadata={resitaMetadata} />
}
