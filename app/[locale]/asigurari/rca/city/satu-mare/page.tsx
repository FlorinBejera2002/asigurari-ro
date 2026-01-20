import { Metadata } from 'next'
import {
  satuMareConfig,
  metadata as satuMareMetadata
} from '@/data/rca/city/satu-mare'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: satuMareMetadata.title,
  description: satuMareMetadata.description
}

export default function SatuMarePage() {
  return (
    <RCACityPageLayout config={satuMareConfig} metadata={satuMareMetadata} />
  )
}
