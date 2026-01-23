import { Metadata } from 'next'
import { insurerContent, metadata as insurerMetadata } from '@/data/rca/insurer/asirom'
import RCAInsurerPageLayout from '../../components/RCAInsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return <RCAInsurerPageLayout content={insurerContent} />
}
