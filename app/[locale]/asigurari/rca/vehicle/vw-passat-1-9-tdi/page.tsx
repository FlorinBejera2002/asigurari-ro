import { Metadata } from 'next'
import {
  vwPassat19TdiConfig,
  metadata as vwPassat19TdiMetadata
} from '@/data/rca/vehicle/vw-passat-1-9-tdi'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: vwPassat19TdiMetadata.title,
  description: vwPassat19TdiMetadata.description
}

export default function VwPassat19TdiPage() {
  return <RCAVehiclePageLayout config={vwPassat19TdiConfig} />
}
