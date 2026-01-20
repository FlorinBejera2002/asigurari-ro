import { Metadata } from 'next'
import {
  albaIuliaConfig,
  metadata as albaIuliaMetadata
} from '@/data/rca/city/alba-iulia'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: albaIuliaMetadata.title,
  description: albaIuliaMetadata.description
}

export default function AlbaIuliaPage() {
  return (
    <RCACityPageLayout config={albaIuliaConfig} metadata={albaIuliaMetadata} />
  )
}
