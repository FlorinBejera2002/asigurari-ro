import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, timisoaraConfig } from '@/data/rca/city/timisoara'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function TimisoaraPage() {
  return <RCACityPageLayout config={timisoaraConfig} metadata={cityMetadata} />
}
