import { Metadata } from 'next'
import {
  baiaMareConfig,
  metadata as baiaMareMetadata
} from '@/data/rca/city/baia-mare'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: baiaMareMetadata.title,
  description: baiaMareMetadata.description
}

export default function BaiaMarePage() {
  return (
    <RCACityPageLayout config={baiaMareConfig} metadata={baiaMareMetadata} />
  )
}
