import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, daciaSanderoConfig } from '@/data/rca/vehicle/dacia-sandero'

export const metadata: Metadata = vehicleMetadata

export default function DaciaSanderoPage() {
  return <RCAVehiclePageLayout config={daciaSanderoConfig} metadata={vehicleMetadata} />
}
