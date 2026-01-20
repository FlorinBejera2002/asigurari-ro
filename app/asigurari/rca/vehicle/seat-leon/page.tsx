import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, seatLeonConfig } from '@/data/rca/vehicle/seat-leon'

export const metadata: Metadata = vehicleMetadata

export default function SeatLeonPage() {
  return <RCAVehiclePageLayout config={seatLeonConfig} metadata={vehicleMetadata} />
}
