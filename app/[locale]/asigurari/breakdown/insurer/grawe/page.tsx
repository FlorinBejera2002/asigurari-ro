import { Metadata } from 'next'
import BannerBreakdown from '@/components/banners/banner-breakdown'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/breakdown/insurer/grawe'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return (
    <InsurerPageLayout banner={<BannerBreakdown />} content={insurerContent} />
  )
}
