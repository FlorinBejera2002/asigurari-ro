import { Metadata } from 'next'
import BannerHealth from '@/components/banners/banner-health'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/health/insurer/eurolife'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return (
    <InsurerPageLayout banner={<BannerHealth />} content={insurerContent} />
  )
}
