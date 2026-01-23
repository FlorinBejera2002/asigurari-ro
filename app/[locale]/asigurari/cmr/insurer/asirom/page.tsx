import { Metadata } from 'next'
import BannerCMR from '@/components/banners/banner-cmr'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/cmr/insurer/asirom'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return <InsurerPageLayout banner={<BannerCMR />} content={insurerContent} />
}
