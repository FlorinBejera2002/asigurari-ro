import { Metadata } from 'next'
import {
  botosaniConfig,
  metadata as botosaniMetadata
} from '@/data/rca/city/botosani'
import RCACityPageLayout from '../../components/RCACityPageLayout'

export const metadata: Metadata = {
  title: botosaniMetadata.title,
  description: botosaniMetadata.description
}

export default function BotosaniPage() {
  return (
    <RCACityPageLayout config={botosaniConfig} metadata={botosaniMetadata} />
  )
}
