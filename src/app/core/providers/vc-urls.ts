import { environment } from '@turing/environment';

export class VcUrls {
  private static currentBaseUrl: string = environment.baseUrl;

  private static formatQuery = (query: {}) => {
    let queryParams = '?';
    const keys = Object.keys(query);
    const length = keys.length;
    keys.forEach((key, index) => {
      let appendAnd = true;
      if ((length - 1) === index) {
        appendAnd = false;
      }
      queryParams += `${key}=${query[key]}${ appendAnd ? '&' : ''}`;
    });
    return queryParams;
  };

  static setCurrentBaseUrl = (url: string): void => {
    VcUrls.currentBaseUrl = url;
  };
  static getBaseUrl = (): string => environment.baseUrl;
  static getCurrentBaseUrl = (): string => VcUrls.currentBaseUrl;
  static getLoginUrl = (): string => `${VcUrls.currentBaseUrl}customers/login`;
  static getCreateAccountUrl = (): string => `${VcUrls.currentBaseUrl}customers`;

  static getProductsUrl = (query?: {}): string =>
    `${VcUrls.currentBaseUrl}products${VcUrls.formatQuery(query)}`;

  static getDepartmentsUrl = (): string => `${VcUrls.currentBaseUrl}departments`;

  static getCategoryUrl = (query?: {}): string =>
    `${VcUrls.currentBaseUrl}categories${VcUrls.formatQuery(query)}`;
}
