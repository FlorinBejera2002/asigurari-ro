import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, drobetaTurnuSeverinConfig } from '@/data/rca/city/drobeta-turnu-severin'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function DrobetaTurnuSeverinPage() {
  return <RCACityPageLayout config={drobetaTurnuSeverinConfig} metadata={cityMetadata} />
}
