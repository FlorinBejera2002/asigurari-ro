import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, renaultFluenceConfig } from '@/data/rca/vehicle/renault-fluence'

export const metadata: Metadata = vehicleMetadata

export default function RenaultFluencePage() {
  return <RCAVehiclePageLayout config={renaultFluenceConfig} metadata={vehicleMetadata} />
}
