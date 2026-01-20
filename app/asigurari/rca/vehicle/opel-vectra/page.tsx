import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, opelVectraConfig } from '@/data/rca/vehicle/opel-vectra'

export const metadata: Metadata = vehicleMetadata

export default function OpelVectraPage() {
  return <RCAVehiclePageLayout config={opelVectraConfig} metadata={vehicleMetadata} />
}
