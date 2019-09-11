export abstract class VcAuthToken {
  abstract getToken(): string | null;

  abstract setToken(token: string): void;

  abstract deleteToken(): void;
}
