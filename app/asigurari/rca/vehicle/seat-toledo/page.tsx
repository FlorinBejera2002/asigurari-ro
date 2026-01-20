import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, seatToledoConfig } from '@/data/rca/vehicle/seat-toledo'

export const metadata: Metadata = vehicleMetadata

export default function SeatToledoPage() {
  return <RCAVehiclePageLayout config={seatToledoConfig} metadata={vehicleMetadata} />
}
