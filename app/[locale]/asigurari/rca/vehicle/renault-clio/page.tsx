import { Metadata } from 'next'
import {
  renaultClioConfig,
  metadata as renaultClioMetadata
} from '@/data/rca/vehicle/renault-clio'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: renaultClioMetadata.title,
  description: renaultClioMetadata.description
}

export default function RenaultClioPage() {
  return <RCAVehiclePageLayout config={renaultClioConfig} />
}
