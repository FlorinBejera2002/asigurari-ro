import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, mercedesVitoConfig } from '@/data/rca/vehicle/mercedes-vito'

export const metadata: Metadata = vehicleMetadata

export default function MercedesVitoPage() {
  return <RCAVehiclePageLayout config={mercedesVitoConfig} metadata={vehicleMetadata} />
}
