import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, opelZafiraConfig } from '@/data/rca/vehicle/opel-zafira'

export const metadata: Metadata = vehicleMetadata

export default function OpelZafiraPage() {
  return <RCAVehiclePageLayout config={opelZafiraConfig} metadata={vehicleMetadata} />
}
