import { Metadata } from 'next'
import {
  drobetaTurnuSeverinConfig,
  metadata as drobetaTurnuSeverinMetadata
} from '@/data/rca/city/drobeta-turnu-severin'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: drobetaTurnuSeverinMetadata.title,
  description: drobetaTurnuSeverinMetadata.description
}

export default function DrobetaTurnuSeverinPage() {
  return (
    <RCACityPageLayout
      config={drobetaTurnuSeverinConfig}
      metadata={drobetaTurnuSeverinMetadata}
    />
  )
}
