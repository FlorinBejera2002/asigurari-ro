import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, seatCordobaConfig } from '@/data/rca/vehicle/seat-cordoba'

export const metadata: Metadata = vehicleMetadata

export default function SeatCordobaPage() {
  return <RCAVehiclePageLayout config={seatCordobaConfig} metadata={vehicleMetadata} />
}
