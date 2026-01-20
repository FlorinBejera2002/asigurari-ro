import { Metadata } from 'next'
import {
  tulceaConfig,
  metadata as tulceaMetadata
} from '@/data/rca/city/tulcea'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: tulceaMetadata.title,
  description: tulceaMetadata.description
}

export default function TulceaPage() {
  return <RCACityPageLayout config={tulceaConfig} metadata={tulceaMetadata} />
}
