import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, mercedesE220Config } from '@/data/rca/vehicle/mercedes-e220'

export const metadata: Metadata = vehicleMetadata

export default function MercedesE220Page() {
  return <RCAVehiclePageLayout config={mercedesE220Config} metadata={vehicleMetadata} />
}
