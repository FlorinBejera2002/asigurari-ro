import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, clujNapocaConfig } from '@/data/rca/city/cluj-napoca'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function ClujNapocaPage() {
  return <RCACityPageLayout config={clujNapocaConfig} metadata={cityMetadata} />
}
