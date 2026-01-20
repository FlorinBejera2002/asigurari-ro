import { Metadata } from 'next'
import {
  peugeot107Config,
  metadata as peugeot107Metadata
} from '@/data/rca/vehicle/peugeot-107'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: peugeot107Metadata.title,
  description: peugeot107Metadata.description
}

export default function Peugeot107Page() {
  return <RCAVehiclePageLayout config={peugeot107Config} />
}
