export interface TocItem {
  href: string
  title: string
}

export interface ConclusionItem {
  text: string
  href: string
}

export interface ListItem {
  title?: string
  items: string[]
  ordered?: boolean
}

export interface ImageData {
  src: string
  alt: string
}

export interface Subsection {
  heading?: string
  subheading?: string
  content?: string
  lists?: ListItem[]
  lists_additional?: ListItem[]
  additional_content?: string
  image?: ImageData
}

export interface ContentSection {
  id?: string
  heading?: string
  content?: string
  lists?: ListItem[]
  lists_additional?: ListItem[]
  additional_content?: string
  subsections?: Subsection[]
  image?: ImageData
}

export interface BlogArticleData {
  title: string
  image?: string
  image_alt?: string
  intro_text?: string
  summary?: string[]
  toc_items?: TocItem[]
  content_sections: ContentSection[]
  conclusion?: ConclusionItem[] | string
}
