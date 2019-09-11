import { environment } from '@turing/environment';

export class VcUrls {
  private static currentBaseUrl: string = environment.baseUrl;

  static setCurrentBaseUrl = (url: string): void => {
    VcUrls.currentBaseUrl = url;
  };
  static getBaseUrl = (): string => environment.baseUrl;
  static getCurrentBaseUrl = (): string => VcUrls.currentBaseUrl;
  static getLoginUrl = (): string => `${VcUrls.getBaseUrl}jwt/verify/`;
}
