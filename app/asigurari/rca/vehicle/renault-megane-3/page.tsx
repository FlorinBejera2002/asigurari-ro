import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, renaultMegane3Config } from '@/data/rca/vehicle/renault-megane-3'

export const metadata: Metadata = vehicleMetadata

export default function RenaultMegane3Page() {
  return <RCAVehiclePageLayout config={renaultMegane3Config} metadata={vehicleMetadata} />
}
