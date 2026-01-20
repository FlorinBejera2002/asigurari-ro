import { Metadata } from 'next'
import RCACityPageLayout from '@/components/rca/RCACityPageLayout'
import { metadata as cityMetadata, botosaniConfig } from '@/data/rca/city/botosani'

export const metadata: Metadata = {
  title: cityMetadata.title,
  description: cityMetadata.description
}

export default function BotosaniPage() {
  return <RCACityPageLayout config={botosaniConfig} metadata={cityMetadata} />
}
