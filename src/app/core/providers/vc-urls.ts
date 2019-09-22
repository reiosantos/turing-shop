import {environment} from '@turing/environment';

export class VcUrls {
  private static currentBaseUrl: string = environment.baseUrl;

  static setCurrentBaseUrl = (url: string): void => {
    VcUrls.currentBaseUrl = url;
  };
  static getBaseUrl = (): string => environment.baseUrl;
  static getCurrentBaseUrl = (): string => VcUrls.currentBaseUrl;
  static getLoginUrl = (): string => `${VcUrls.currentBaseUrl}customers/login`;
  static getCreateAccountUrl = (): string => `${VcUrls.currentBaseUrl}customers`;
  static getProductsUrl = (): string => `${VcUrls.currentBaseUrl}products`;
  static getDepartmentsUrl = (): string => `${VcUrls.currentBaseUrl}departments`;
  static getCategoryUrl = (): string => `${VcUrls.currentBaseUrl}categories`;
}
