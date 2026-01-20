import { Metadata } from 'next'
import {
  renaultFluenceConfig,
  metadata as renaultFluenceMetadata
} from '@/data/rca/vehicle/renault-fluence'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: renaultFluenceMetadata.title,
  description: renaultFluenceMetadata.description
}

export default function RenaultFluencePage() {
  return <RCAVehiclePageLayout config={renaultFluenceConfig} />
}
