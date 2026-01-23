import { Metadata } from 'next'
import BannerLife from '@/components/banners/banner-life'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/life/insurer/asirom'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return <InsurerPageLayout banner={<BannerLife />} content={insurerContent} />
}
