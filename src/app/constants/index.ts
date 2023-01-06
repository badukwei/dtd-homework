import { url } from "@app/constants/url.constant";

/**
 * 常數型別
 */
export interface Constants {
  /** url 常數 */
  urlConstant: typeof url;
}

/** 常數 root */
export const constants: Constants = {
  /** url 常數 */
  urlConstant: url,
};

/** url 常數 */
export const urlConstant = constants.urlConstant;
