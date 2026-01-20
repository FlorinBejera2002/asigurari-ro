import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, renaultKangooConfig } from '@/data/rca/vehicle/renault-kangoo'

export const metadata: Metadata = vehicleMetadata

export default function RenaultKangooPage() {
  return <RCAVehiclePageLayout config={renaultKangooConfig} metadata={vehicleMetadata} />
}
