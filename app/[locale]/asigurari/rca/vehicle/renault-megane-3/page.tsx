import { Metadata } from 'next'
import {
  renaultMegane3Config,
  metadata as renaultMegane3Metadata
} from '@/data/rca/vehicle/renault-megane-3'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: renaultMegane3Metadata.title,
  description: renaultMegane3Metadata.description
}

export default function RenaultMegane3Page() {
  return <RCAVehiclePageLayout config={renaultMegane3Config} />
}
