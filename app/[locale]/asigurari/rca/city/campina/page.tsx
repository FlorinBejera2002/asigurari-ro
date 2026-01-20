import { Metadata } from 'next'
import {
  campinaConfig,
  metadata as campinaMetadata
} from '@/data/rca/city/campina'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: campinaMetadata.title,
  description: campinaMetadata.description
}

export default function CampinaPage() {
  return <RCACityPageLayout config={campinaConfig} metadata={campinaMetadata} />
}
