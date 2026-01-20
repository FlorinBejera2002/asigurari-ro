import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, peugeot307Config } from '@/data/rca/vehicle/peugeot-307'

export const metadata: Metadata = vehicleMetadata

export default function Peugeot307Page() {
  return <RCAVehiclePageLayout config={peugeot307Config} metadata={vehicleMetadata} />
}
