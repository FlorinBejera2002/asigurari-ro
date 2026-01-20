import { Metadata } from 'next'
import {
  brasovConfig,
  metadata as brasovMetadata
} from '@/data/rca/city/brasov'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: brasovMetadata.title,
  description: brasovMetadata.description
}

export default function BrasovPage() {
  return <RCACityPageLayout config={brasovConfig} metadata={brasovMetadata} />
}
