import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, vwPassat19TdiConfig } from '@/data/rca/vehicle/vw-passat-1-9-tdi'

export const metadata: Metadata = vehicleMetadata

export default function VWPassat19TdiPage() {
  return <RCAVehiclePageLayout config={vwPassat19TdiConfig} metadata={vehicleMetadata} />
}
