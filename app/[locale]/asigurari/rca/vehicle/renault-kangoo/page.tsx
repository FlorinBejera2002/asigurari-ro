import { Metadata } from 'next'
import {
  renaultKangooConfig,
  metadata as renaultKangooMetadata
} from '@/data/rca/vehicle/renault-kangoo'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: renaultKangooMetadata.title,
  description: renaultKangooMetadata.description
}

export default function RenaultKangooPage() {
  return <RCAVehiclePageLayout config={renaultKangooConfig} />
}
