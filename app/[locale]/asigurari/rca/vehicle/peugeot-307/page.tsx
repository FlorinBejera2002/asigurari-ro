import { Metadata } from 'next'
import {
  peugeot307Config,
  metadata as peugeot307Metadata
} from '@/data/rca/vehicle/peugeot-307'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: peugeot307Metadata.title,
  description: peugeot307Metadata.description
}

export default function Peugeot307Page() {
  return <RCAVehiclePageLayout config={peugeot307Config} />
}
