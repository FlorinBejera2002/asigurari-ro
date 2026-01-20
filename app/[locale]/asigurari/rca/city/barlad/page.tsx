import { Metadata } from 'next'
import {
  barladConfig,
  metadata as barladMetadata
} from '@/data/rca/city/barlad'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: barladMetadata.title,
  description: barladMetadata.description
}

export default function BarladPage() {
  return <RCACityPageLayout config={barladConfig} metadata={barladMetadata} />
}
