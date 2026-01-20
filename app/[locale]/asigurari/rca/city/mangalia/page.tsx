import { Metadata } from 'next'
import {
  mangaliaConfig,
  metadata as mangaliaMetadata
} from '@/data/rca/city/mangalia'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: mangaliaMetadata.title,
  description: mangaliaMetadata.description
}

export default function MangaliaPage() {
  return (
    <RCACityPageLayout config={mangaliaConfig} metadata={mangaliaMetadata} />
  )
}
