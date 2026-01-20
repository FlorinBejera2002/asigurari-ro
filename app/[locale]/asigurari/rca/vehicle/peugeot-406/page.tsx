import { Metadata } from 'next'
import {
  peugeot406Config,
  metadata as peugeot406Metadata
} from '@/data/rca/vehicle/peugeot-406'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: peugeot406Metadata.title,
  description: peugeot406Metadata.description
}

export default function Peugeot406Page() {
  return <RCAVehiclePageLayout config={peugeot406Config} />
}
