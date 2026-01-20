import { Metadata } from 'next'
import {
  seatToledoConfig,
  metadata as seatToledoMetadata
} from '@/data/rca/vehicle/seat-toledo'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: seatToledoMetadata.title,
  description: seatToledoMetadata.description
}

export default function SeatToledoPage() {
  return <RCAVehiclePageLayout config={seatToledoConfig} />
}
