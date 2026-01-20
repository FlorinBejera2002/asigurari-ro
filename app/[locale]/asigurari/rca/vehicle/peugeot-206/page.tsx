import { Metadata } from 'next'
import {
  peugeot206Config,
  metadata as peugeot206Metadata
} from '@/data/rca/vehicle/peugeot-206'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: peugeot206Metadata.title,
  description: peugeot206Metadata.description
}

export default function Peugeot206Page() {
  return <RCAVehiclePageLayout config={peugeot206Config} />
}
