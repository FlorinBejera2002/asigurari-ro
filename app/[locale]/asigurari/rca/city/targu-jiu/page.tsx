import { Metadata } from 'next'
import {
  targuJiuConfig,
  metadata as targuJiuMetadata
} from '@/data/rca/city/targu-jiu'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: targuJiuMetadata.title,
  description: targuJiuMetadata.description
}

export default function TarguJiuPage() {
  return (
    <RCACityPageLayout config={targuJiuConfig} metadata={targuJiuMetadata} />
  )
}
