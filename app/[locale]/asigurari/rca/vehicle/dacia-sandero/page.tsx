import { Metadata } from 'next'
import {
  daciaSanderoConfig,
  metadata as daciaSanderoMetadata
} from '@/data/rca/vehicle/dacia-sandero'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: daciaSanderoMetadata.title,
  description: daciaSanderoMetadata.description
}

export default function DaciaSanderoPage() {
  return <RCAVehiclePageLayout config={daciaSanderoConfig} />
}
