import { Metadata } from 'next'
import BannerPad from '@/components/banners/banner-pad'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/pad/insurer/paid'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return <InsurerPageLayout banner={<BannerPad />} content={insurerContent} />
}
