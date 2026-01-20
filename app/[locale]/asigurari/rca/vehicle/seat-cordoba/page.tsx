import { Metadata } from 'next'
import {
  seatCordobaConfig,
  metadata as seatCordobaMetadata
} from '@/data/rca/vehicle/seat-cordoba'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: seatCordobaMetadata.title,
  description: seatCordobaMetadata.description
}

export default function SeatCordobaPage() {
  return <RCAVehiclePageLayout config={seatCordobaConfig} />
}
