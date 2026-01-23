import { Metadata } from 'next'
import BannerAccidents from '@/components/banners/banner-accidents'
import {
  insurerContent,
  metadata as insurerMetadata
} from '@/data/accidents/insurer/uniqa'
import InsurerPageLayout from '../../../components/InsurerPageLayout'

export const metadata: Metadata = {
  title: insurerMetadata.title,
  description: insurerMetadata.description
}

export default function Page() {
  return (
    <InsurerPageLayout banner={<BannerAccidents />} content={insurerContent} />
  )
}
