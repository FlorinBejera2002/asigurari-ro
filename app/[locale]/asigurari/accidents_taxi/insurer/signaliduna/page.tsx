import { Metadata } from 'next'
import BannerAccidentsTaxi from '@/components/banners/banner-accidents-taxi'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/accidents_taxi/insurer/signaliduna'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return (
    <InsurerPageLayout
      banner={<BannerAccidentsTaxi />}
      content={insurerContent}
    />
  )
}
