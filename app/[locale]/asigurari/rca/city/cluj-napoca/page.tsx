import { Metadata } from 'next'
import {
  clujNapocaConfig,
  metadata as clujNapocaMetadata
} from '@/data/rca/city/cluj-napoca'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: clujNapocaMetadata.title,
  description: clujNapocaMetadata.description
}

export default function ClujNapocaPage() {
  return (
    <RCACityPageLayout
      config={clujNapocaConfig}
      metadata={clujNapocaMetadata}
    />
  )
}
