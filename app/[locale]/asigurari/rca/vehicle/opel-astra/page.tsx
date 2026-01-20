import { Metadata } from 'next'
import {
  opelAstraConfig,
  metadata as opelAstraMetadata
} from '@/data/rca/vehicle/opel-astra'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: opelAstraMetadata.title,
  description: opelAstraMetadata.description
}

export default function OpelAstraPage() {
  return <RCAVehiclePageLayout config={opelAstraConfig} />
}
