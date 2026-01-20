import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, peugeot406Config } from '@/data/rca/vehicle/peugeot-406'

export const metadata: Metadata = vehicleMetadata

export default function Peugeot406Page() {
  return <RCAVehiclePageLayout config={peugeot406Config} metadata={vehicleMetadata} />
}
