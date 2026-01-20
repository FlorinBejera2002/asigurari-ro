import { Metadata } from 'next'
import {
  skodaOctaviaConfig,
  metadata as skodaOctaviaMetadata
} from '@/data/rca/vehicle/skoda-octavia'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: skodaOctaviaMetadata.title,
  description: skodaOctaviaMetadata.description
}

export default function SkodaOctaviaPage() {
  return <RCAVehiclePageLayout config={skodaOctaviaConfig} />
}
