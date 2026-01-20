import { Metadata } from 'next'
import {
  opelZafiraConfig,
  metadata as opelZafiraMetadata
} from '@/data/rca/vehicle/opel-zafira'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: opelZafiraMetadata.title,
  description: opelZafiraMetadata.description
}

export default function OpelZafiraPage() {
  return <RCAVehiclePageLayout config={opelZafiraConfig} />
}
