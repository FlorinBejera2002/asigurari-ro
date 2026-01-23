import { Metadata } from 'next'
import BannerCasco from '@/components/banners/banner-casco'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/casco/insurer/grawe'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return <InsurerPageLayout banner={<BannerCasco />} content={insurerContent} />
}
