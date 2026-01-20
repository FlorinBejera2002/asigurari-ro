import { Metadata } from 'next'
import {
  victoriaConfig,
  metadata as victoriaMetadata
} from '@/data/rca/city/victoria'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: victoriaMetadata.title,
  description: victoriaMetadata.description
}

export default function VictoriaPage() {
  return (
    <RCACityPageLayout config={victoriaConfig} metadata={victoriaMetadata} />
  )
}
