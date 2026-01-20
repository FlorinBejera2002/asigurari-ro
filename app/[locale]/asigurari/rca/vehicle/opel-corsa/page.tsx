import { Metadata } from 'next'
import {
  opelCorsaConfig,
  metadata as opelCorsaMetadata
} from '@/data/rca/vehicle/opel-corsa'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: opelCorsaMetadata.title,
  description: opelCorsaMetadata.description
}

export default function OpelCorsaPage() {
  return <RCAVehiclePageLayout config={opelCorsaConfig} />
}
