import { Metadata } from 'next'
import BannerTravel from '@/components/banners/banner-travel'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/travel/insurer/allianzunit'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return (
    <InsurerPageLayout banner={<BannerTravel />} content={insurerContent} />
  )
}
