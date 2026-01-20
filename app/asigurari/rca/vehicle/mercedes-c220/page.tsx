import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, mercedesC220Config } from '@/data/rca/vehicle/mercedes-c220'

export const metadata: Metadata = vehicleMetadata

export default function MercedesC220Page() {
  return <RCAVehiclePageLayout config={mercedesC220Config} metadata={vehicleMetadata} />
}
