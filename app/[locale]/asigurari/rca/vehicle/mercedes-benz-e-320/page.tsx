import { Metadata } from 'next'
import {
  mercedesBenzE320Config,
  metadata as mercedesBenzE320Metadata
} from '@/data/rca/vehicle/mercedes-benz-e-320'
import RCAVehiclePageLayout from '../../components/RCAVehiclePageLayout'

export const metadata: Metadata = {
  title: mercedesBenzE320Metadata.title,
  description: mercedesBenzE320Metadata.description
}

export default function MercedesBenzE320Page() {
  return <RCAVehiclePageLayout config={mercedesBenzE320Config} />
}
