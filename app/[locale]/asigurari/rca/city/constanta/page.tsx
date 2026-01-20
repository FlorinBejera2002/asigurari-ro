import { Metadata } from 'next'
import {
  constantaConfig,
  metadata as constantaMetadata
} from '@/data/rca/city/constanta'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: constantaMetadata.title,
  description: constantaMetadata.description
}

export default function ConstantaPage() {
  return (
    <RCACityPageLayout config={constantaConfig} metadata={constantaMetadata} />
  )
}
