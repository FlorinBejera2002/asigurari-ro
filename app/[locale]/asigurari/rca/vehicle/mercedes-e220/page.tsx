import { Metadata } from 'next'
import {
  mercedesE220Config,
  metadata as mercedesE220Metadata
} from '@/data/rca/vehicle/mercedes-e220'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: mercedesE220Metadata.title,
  description: mercedesE220Metadata.description
}

export default function MercedesE220Page() {
  return <RCAVehiclePageLayout config={mercedesE220Config} />
}
