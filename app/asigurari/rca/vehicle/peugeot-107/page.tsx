import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, peugeot107Config } from '@/data/rca/vehicle/peugeot-107'

export const metadata: Metadata = vehicleMetadata

export default function Peugeot107Page() {
  return <RCAVehiclePageLayout config={peugeot107Config} metadata={vehicleMetadata} />
}
