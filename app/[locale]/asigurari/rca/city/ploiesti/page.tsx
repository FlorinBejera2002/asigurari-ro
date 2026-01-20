import { Metadata } from 'next'
import {
  ploiestiConfig,
  metadata as ploiestiMetadata
} from '@/data/rca/city/ploiesti'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: ploiestiMetadata.title,
  description: ploiestiMetadata.description
}

export default function PloiestiPage() {
  return (
    <RCACityPageLayout config={ploiestiConfig} metadata={ploiestiMetadata} />
  )
}
