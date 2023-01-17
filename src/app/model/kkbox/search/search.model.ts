export interface SearchResponse {
  tracks: Tracks
  paging: Paging
  summary: Summary
}

export interface Paging {
  offset: number
  limit: number
  previous: null
  next: string
}

export interface Summary {
  total: number
}

export interface Tracks {
  data: Datum[]
  paging: Paging
  summary: Summary
}

export interface Datum {
  id: string
  name: string
  duration: number
  isrc: string
  url: string
  track_number: number
  explicitness: boolean
  available_territories: AvailableTerritory[]
  album: Album
}

export interface Album {
  id: string
  name: string
  url: string
  explicitness: boolean
  available_territories: AvailableTerritory[]
  release_date: Date
  images: Image[]
  artist: Artist
}

export interface Artist {
  id: string
  name: string
  url: string
  images: Image[]
}

export interface Image {
  height: number
  width: number
  url: string
}

export enum AvailableTerritory {
  Hk = 'HK',
  Jp = 'JP',
  My = 'MY',
  Sg = 'SG',
  Tw = 'TW',
}
