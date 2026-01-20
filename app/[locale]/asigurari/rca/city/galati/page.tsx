import { Metadata } from 'next'
import {
  galatiConfig,
  metadata as galatiMetadata
} from '@/data/rca/city/galati'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: galatiMetadata.title,
  description: galatiMetadata.description
}

export default function GalatiPage() {
  return <RCACityPageLayout config={galatiConfig} metadata={galatiMetadata} />
}
