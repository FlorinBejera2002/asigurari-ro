import { Metadata } from 'next'
import {
  sloboziaConfig,
  metadata as sloboziaMetadata
} from '@/data/rca/city/slobozia'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: sloboziaMetadata.title,
  description: sloboziaMetadata.description
}

export default function SloboziaPage() {
  return (
    <RCACityPageLayout config={sloboziaConfig} metadata={sloboziaMetadata} />
  )
}
