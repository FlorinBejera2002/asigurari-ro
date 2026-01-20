import { Metadata } from 'next'
import {
  seatLeonConfig,
  metadata as seatLeonMetadata
} from '@/data/rca/vehicle/seat-leon'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: seatLeonMetadata.title,
  description: seatLeonMetadata.description
}

export default function SeatLeonPage() {
  return <RCAVehiclePageLayout config={seatLeonConfig} />
}
