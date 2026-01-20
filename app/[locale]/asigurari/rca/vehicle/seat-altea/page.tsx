import { Metadata } from 'next'
import {
  seatAlteaConfig,
  metadata as seatAlteaMetadata
} from '@/data/rca/vehicle/seat-altea'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: seatAlteaMetadata.title,
  description: seatAlteaMetadata.description
}

export default function SeatAlteaPage() {
  return <RCAVehiclePageLayout config={seatAlteaConfig} />
}
