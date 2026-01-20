import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, mercedesBenzE320Config } from '@/data/rca/vehicle/mercedes-benz-e-320'

export const metadata: Metadata = vehicleMetadata

export default function MercedesBenzE320Page() {
  return <RCAVehiclePageLayout config={mercedesBenzE320Config} metadata={vehicleMetadata} />
}
