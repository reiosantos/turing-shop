import {Observable, Subscription} from 'rxjs';
import {VcProduct} from '@turing/shared/models/vc-product';
import {VcCategory} from '@turing/shared/models/vc-category';
import {VcDepartment} from '@turing/shared/models/vc-department';

export abstract class VcProductClient {
  products$: Observable<{ count: number, rows: VcProduct[] }>;
  categories$: Observable<{ count: number, rows: VcCategory[] }>;
  departments$: Observable<VcDepartment[]>;

  abstract getAllProducts(): Subscription;

  abstract getAllDepartments(): Subscription;

  abstract getAllCategories(): Subscription;

  initClient(): void {
  }
}

