import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, seatAlteaConfig } from '@/data/rca/vehicle/seat-altea'

export const metadata: Metadata = vehicleMetadata

export default function SeatAlteaPage() {
  return <RCAVehiclePageLayout config={seatAlteaConfig} metadata={vehicleMetadata} />
}
