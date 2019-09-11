import { Observable } from 'rxjs';

export abstract class VcAuth {
  abstract login(username: string, password: string): Observable<any>;
}
