import { Metadata } from 'next'
import BannerHome from '@/components/banners/banner-home'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/home/insurer/omniasig'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return <InsurerPageLayout banner={<BannerHome />} content={insurerContent} />
}
