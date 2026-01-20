import { Metadata } from 'next'
import {
  navodariConfig,
  metadata as navodariMetadata
} from '@/data/rca/city/navodari'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: navodariMetadata.title,
  description: navodariMetadata.description
}

export default function NavodariPage() {
  return (
    <RCACityPageLayout config={navodariConfig} metadata={navodariMetadata} />
  )
}
