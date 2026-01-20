import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, daciaLoganConfig } from '@/data/rca/vehicle/dacia-logan'

export const metadata: Metadata = vehicleMetadata

export default function DaciaLoganPage() {
  return <RCAVehiclePageLayout config={daciaLoganConfig} metadata={vehicleMetadata} />
}
