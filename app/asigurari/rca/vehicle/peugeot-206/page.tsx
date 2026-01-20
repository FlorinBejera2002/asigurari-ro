import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, peugeot206Config } from '@/data/rca/vehicle/peugeot-206'

export const metadata: Metadata = vehicleMetadata

export default function Peugeot206Page() {
  return <RCAVehiclePageLayout config={peugeot206Config} metadata={vehicleMetadata} />
}
