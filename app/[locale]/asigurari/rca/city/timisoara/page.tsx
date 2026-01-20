import { Metadata } from 'next'
import {
  timisoaraConfig,
  metadata as timisoaraMetadata
} from '@/data/rca/city/timisoara'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: timisoaraMetadata.title,
  description: timisoaraMetadata.description
}

export default function TimisoaraPage() {
  return (
    <RCACityPageLayout config={timisoaraConfig} metadata={timisoaraMetadata} />
  )
}
