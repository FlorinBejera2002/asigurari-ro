import { Metadata } from 'next'
import {
  mercedesVitoConfig,
  metadata as mercedesVitoMetadata
} from '@/data/rca/vehicle/mercedes-vito'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: mercedesVitoMetadata.title,
  description: mercedesVitoMetadata.description
}

export default function MercedesVitoPage() {
  return <RCAVehiclePageLayout config={mercedesVitoConfig} />
}
