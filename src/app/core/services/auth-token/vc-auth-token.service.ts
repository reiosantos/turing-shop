import { Inject, Injectable } from '@angular/core';
import { STRING } from '@turing/shared/interfaces/vc-strings';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { VcAuthToken } from '@turing/shared/interfaces/vc-auth-token';

@Injectable()
export class VcAuthTokenService extends VcAuthToken {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: StorageService) {
    super();
  }

  getToken = (): string|null => {
    return this.localStorage.get(STRING.TOKEN_KEY);
  };

  setToken = (value: string): void => {
    this.localStorage.set(STRING.TOKEN_KEY, value);
  };

  deleteToken() {
    this.localStorage.remove(STRING.TOKEN_KEY);
  }
}
