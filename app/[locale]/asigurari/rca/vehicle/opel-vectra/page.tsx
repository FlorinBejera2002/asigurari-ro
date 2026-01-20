import { Metadata } from 'next'
import {
  opelVectraConfig,
  metadata as opelVectraMetadata
} from '@/data/rca/vehicle/opel-vectra'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: opelVectraMetadata.title,
  description: opelVectraMetadata.description
}

export default function OpelVectraPage() {
  return <RCAVehiclePageLayout config={opelVectraConfig} />
}
