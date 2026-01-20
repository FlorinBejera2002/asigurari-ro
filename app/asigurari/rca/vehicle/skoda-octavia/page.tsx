import { Metadata } from 'next'
import RCAVehiclePageLayout from '@/components/rca/RCAVehiclePageLayout'
import { metadata as vehicleMetadata, skodaOctaviaConfig } from '@/data/rca/vehicle/skoda-octavia'

export const metadata: Metadata = vehicleMetadata

export default function SkodaOctaviaPage() {
  return <RCAVehiclePageLayout config={skodaOctaviaConfig} metadata={vehicleMetadata} />
}
