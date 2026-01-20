import { Metadata } from 'next'
import {
  mercedesC220Config,
  metadata as mercedesC220Metadata
} from '@/data/rca/vehicle/mercedes-c220'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: mercedesC220Metadata.title,
  description: mercedesC220Metadata.description
}

export default function MercedesC220Page() {
  return <RCAVehiclePageLayout config={mercedesC220Config} />
}
