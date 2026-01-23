import { Metadata } from 'next'
import BannerAccidentsTraveler from '@/components/banners/banner-accidents-traveler'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/accidents_traveler/insurer/asirom'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return (
    <InsurerPageLayout
      banner={<BannerAccidentsTraveler />}
      content={insurerContent}
    />
  )
}
