import { Metadata } from 'next'
import {
  peugeotPartnerConfig,
  metadata as peugeotPartnerMetadata
} from '@/data/rca/vehicle/peugeot-partner'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: peugeotPartnerMetadata.title,
  description: peugeotPartnerMetadata.description
}

export default function PeugeotPartnerPage() {
  return <RCAVehiclePageLayout config={peugeotPartnerConfig} />
}
