import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, seatIbizaConfig } from '@/data/rca/vehicle/seat-ibiza'

export const metadata: Metadata = vehicleMetadata

export default function SeatIbizaPage() {
  return <RCAVehiclePageLayout config={seatIbizaConfig} metadata={vehicleMetadata} />
}
