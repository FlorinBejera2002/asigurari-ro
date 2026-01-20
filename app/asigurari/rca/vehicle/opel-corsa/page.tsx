import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, opelCorsaConfig } from '@/data/rca/vehicle/opel-corsa'

export const metadata: Metadata = vehicleMetadata

export default function OpelCorsaPage() {
  return <RCAVehiclePageLayout config={opelCorsaConfig} metadata={vehicleMetadata} />
}
