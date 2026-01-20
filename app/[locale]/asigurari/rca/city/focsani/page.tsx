import { Metadata } from 'next'
import {
  focsaniConfig,
  metadata as focsaniMetadata
} from '@/data/rca/city/focsani'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: focsaniMetadata.title,
  description: focsaniMetadata.description
}

export default function FocsaniPage() {
  return <RCACityPageLayout config={focsaniConfig} metadata={focsaniMetadata} />
}
