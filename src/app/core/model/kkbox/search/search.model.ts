/** 定義搜尋請求型別 */
export interface SearchRequest {
  q: string;
  type: string;
  territory: string;
}
/** 定義搜尋回傳型別 */
export interface SearchResponse {
  tracks: Tracks;
  paging: Paging;
  summary: Summary;
}

/** 定義頁碼型別 */
export interface Paging {
  offset: number;
  limit: number;
  previous: null;
  next: string;
}

/** 定義搜尋結果數量型別 */
export interface Summary {
  total: number;
}
/** 定義曲目資料型別 */
export interface Tracks {
  data: Datum[];
  paging: Paging;
  summary: Summary;
}

/** 定義單筆搜尋結果資料型別 */
export interface Datum {
  id: string;
  name: string;
  duration: number;
  isrc: string;
  url: string;
  track_number: number;
  explicitness: boolean;
  available_territories: AvailableTerritory[];
  album: Album;
}

/** 定義單筆搜尋結果-專輯資料型別 */
export interface Album {
  id: string;
  name: string;
  url: string;
  explicitness: boolean;
  available_territories: AvailableTerritory[];
  release_date: Date;
  images: Image[];
  artist: Artist;
}

/** 定義單筆搜尋結果-專輯-人物資料型別 */
export interface Artist {
  id: string;
  name: string;
  url: string;
  images: Image[];
}

/** 定義單筆搜尋結果-專輯-人物-圖片資料型別 */
export interface Image {
  height: number;
  width: number;
  url: string;
}

/** 定義地域資料 */
export enum AvailableTerritory {
  Hk = 'HK',
  Jp = 'JP',
  My = 'MY',
  Sg = 'SG',
  Tw = 'TW',
}

/** 主頁顯示搜尋結果資料型別 */
export interface SearchResult {
  name: string;
  duration: number;
  date: string;
  artistName: string;
  url: string;
  status: string;
  describe: string;
}
