export interface TravelSection {
  id: string
  icon: string
  title: string
  toc_title: string
  type: 'simple' | 'with_list' | 'list_only'
  content: string
  list_items?: string[]
  content_after?: string
}

export interface TravelCountryConfig {
  country: string
  title?: string
  intro_text: string
  sections: TravelSection[]
}

export interface TravelPageMetadata {
  title: string
  description: string
}
