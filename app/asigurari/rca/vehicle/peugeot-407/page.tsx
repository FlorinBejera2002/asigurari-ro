import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, peugeot407Config } from '@/data/rca/vehicle/peugeot-407'

export const metadata: Metadata = vehicleMetadata

export default function Peugeot407Page() {
  return <RCAVehiclePageLayout config={peugeot407Config} metadata={vehicleMetadata} />
}
