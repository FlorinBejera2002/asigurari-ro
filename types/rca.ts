export interface VehicleSpecification {
  model: string
  version: string
  cc: string
  kw: string
  cp: string
  fuel: string
}

export interface VehicleSection {
  id: string
  icon: string
  title: string
  content: string
}

export interface VehicleButton {
  url: string
  text: string
  icon: string
  class: string
  hover_class: string
  focus_class: string
}

export interface TableHeader {
  text: string
  align: string
}

// RCA City Page Types
export interface RCACitySection {
  icon: string
  title: string
  content: string
  border_top?: boolean
}

export interface RCACityConfig {
  city_name: string
  sections: RCACitySection[]
}

export interface RCACityMetadata {
  title: string
  description: string
}

export interface RCAVehicleConfig {
  vehicle_name: string
  intro_content: string
  cta_text: string
  toc_title: string
  purchase_cta_text: string
  spec_title: string
  table_headers: TableHeader[]
  mobile_labels: string[]
  buttons: VehicleButton[]
  sections: VehicleSection[]
  specifications?: VehicleSpecification[]
}

export interface RCAVehicleMetadata {
  title: string
  description: string
}
