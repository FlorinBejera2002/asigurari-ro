import { Metadata } from 'next'
import {
  metadata as calarasiMetadata,
  calarasisConfig
} from '@/data/rca/city/calarasi'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: calarasiMetadata.title,
  description: calarasiMetadata.description
}

export default function CalarasiPage() {
  return (
    <RCACityPageLayout config={calarasisConfig} metadata={calarasiMetadata} />
  )
}
