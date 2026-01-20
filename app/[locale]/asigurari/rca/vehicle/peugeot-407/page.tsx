import { Metadata } from 'next'
import {
  peugeot407Config,
  metadata as peugeot407Metadata
} from '@/data/rca/vehicle/peugeot-407'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: peugeot407Metadata.title,
  description: peugeot407Metadata.description
}

export default function Peugeot407Page() {
  return <RCAVehiclePageLayout config={peugeot407Config} />
}
