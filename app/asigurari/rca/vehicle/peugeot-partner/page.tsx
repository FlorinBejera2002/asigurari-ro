import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, peugeotPartnerConfig } from '@/data/rca/vehicle/peugeot-partner'

export const metadata: Metadata = vehicleMetadata

export default function PeugeotPartnerPage() {
  return <RCAVehiclePageLayout config={peugeotPartnerConfig} metadata={vehicleMetadata} />
}
