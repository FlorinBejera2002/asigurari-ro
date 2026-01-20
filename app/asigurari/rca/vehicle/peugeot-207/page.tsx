import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, peugeot207Config } from '@/data/rca/vehicle/peugeot-207'

export const metadata: Metadata = vehicleMetadata

export default function Peugeot207Page() {
  return <RCAVehiclePageLayout config={peugeot207Config} metadata={vehicleMetadata} />
}
