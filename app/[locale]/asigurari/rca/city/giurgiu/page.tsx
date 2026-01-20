import { Metadata } from 'next'
import {
  giurgiuConfig,
  metadata as giurgiuMetadata
} from '@/data/rca/city/giurgiu'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: giurgiuMetadata.title,
  description: giurgiuMetadata.description
}

export default function GiurgiuPage() {
  return <RCACityPageLayout config={giurgiuConfig} metadata={giurgiuMetadata} />
}
