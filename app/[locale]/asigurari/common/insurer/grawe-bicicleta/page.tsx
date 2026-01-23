import { Metadata } from 'next'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/common/insurer/grawe-bicicleta'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return <InsurerPageLayout content={insurerContent} />
}
