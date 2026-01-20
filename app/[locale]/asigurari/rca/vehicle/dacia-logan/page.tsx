import { Metadata } from 'next'
import {
  daciaLoganConfig,
  metadata as daciaLoganMetadata
} from '@/data/rca/vehicle/dacia-logan'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: daciaLoganMetadata.title,
  description: daciaLoganMetadata.description
}

export default function DaciaLoganPage() {
  return <RCAVehiclePageLayout config={daciaLoganConfig} />
}
