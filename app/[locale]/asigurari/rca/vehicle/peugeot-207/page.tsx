import { Metadata } from 'next'
import {
  peugeot207Config,
  metadata as peugeot207Metadata
} from '@/data/rca/vehicle/peugeot-207'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: peugeot207Metadata.title,
  description: peugeot207Metadata.description
}

export default function Peugeot207Page() {
  return <RCAVehiclePageLayout config={peugeot207Config} />
}
