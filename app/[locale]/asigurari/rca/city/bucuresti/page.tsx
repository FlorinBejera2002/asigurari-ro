import { Metadata } from 'next'
import {
  bucurestiConfig,
  metadata as bucurestiMetadata
} from '@/data/rca/city/bucuresti'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: bucurestiMetadata.title,
  description: bucurestiMetadata.description
}

export default function BucurestiPage() {
  return (
    <RCACityPageLayout config={bucurestiConfig} metadata={bucurestiMetadata} />
  )
}
