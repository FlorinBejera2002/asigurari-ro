import { Metadata } from 'next'
import {
  pitestiConfig,
  metadata as pitestiMetadata
} from '@/data/rca/city/pitesti'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: pitestiMetadata.title,
  description: pitestiMetadata.description
}

export default function PitestiPage() {
  return <RCACityPageLayout config={pitestiConfig} metadata={pitestiMetadata} />
}
