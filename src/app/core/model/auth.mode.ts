/** 會員驗證 request */
export interface AuthReq {
  /** 授權類型 */
  grant_type: string;
  /** 客戶 ID */
  client_id: string;
  /** 客戶密鑰 */
  client_secret: string;
}
/** 會員驗證 response */
export interface GuestTokenRes {
  /** 授權 token */
  access_token: string;
  /** token 類型 */
  token_type: string;
  /** 失效時間 */
  expires_in: number;
}
