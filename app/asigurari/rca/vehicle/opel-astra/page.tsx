import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, opelAstraConfig } from '@/data/rca/vehicle/opel-astra'

export const metadata: Metadata = vehicleMetadata

export default function OpelAstraPage() {
  return <RCAVehiclePageLayout config={opelAstraConfig} metadata={vehicleMetadata} />
}
