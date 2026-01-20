import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, renaultClioConfig } from '@/data/rca/vehicle/renault-clio'

export const metadata: Metadata = vehicleMetadata

export default function RenaultClioPage() {
  return <RCAVehiclePageLayout config={renaultClioConfig} metadata={vehicleMetadata} />
}
