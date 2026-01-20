import { Metadata } from 'next'
import {
  suceavaConfig,
  metadata as suceavaMetadata
} from '@/data/rca/city/suceava'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: suceavaMetadata.title,
  description: suceavaMetadata.description
}

export default function SuceavaPage() {
  return <RCACityPageLayout config={suceavaConfig} metadata={suceavaMetadata} />
}
