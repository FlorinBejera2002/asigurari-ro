import { Metadata } from 'next'
import {
  seatIbizaConfig,
  metadata as seatIbizaMetadata
} from '@/data/rca/vehicle/seat-ibiza'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: seatIbizaMetadata.title,
  description: seatIbizaMetadata.description
}

export default function SeatIbizaPage() {
  return <RCAVehiclePageLayout config={seatIbizaConfig} />
}
