import { Metadata } from 'next'
import BannerRCP from '@/components/banners/banner-rcp'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/rcp/insurer/allianzunit'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return <InsurerPageLayout banner={<BannerRCP />} content={insurerContent} />
}
