import { Observable, Subscription } from 'rxjs';
import { VcProduct } from '@turing/shared/models/vc-product';
import { VcCategory } from '@turing/shared/models/vc-category';
import { VcDepartment } from '@turing/shared/models/vc-department';
import { VcItem } from '@turing/shared/models/vc-item';
import { VcCartItem } from '@turing/shared/models/vc-cart-item';

export abstract class VcProductClient {
  readonly addedInCartItems$: Observable<VcCartItem[]>;
  readonly cartId$: Observable<string>;
  readonly products$: Observable<{ count: number, rows: VcProduct[] }>;
  readonly categories$: Observable<{ count: number, rows: VcCategory[] }>;
  readonly departments$: Observable<VcDepartment[]>;

  abstract addItemToCart(vcItem: VcItem): Observable<any>;

  abstract generateCartNumber(vcItem: VcItem): Subscription;

  abstract getAllProducts(limit?: number, page?: number, descriptionLength?: number): Subscription;

  abstract getProductDetails(productId: number|string): Observable<VcProduct>;

  abstract getAllDepartments(): Subscription;

  abstract getAllCategories(
    limit?: number, page?: number, descriptionLength?: number
  ): Subscription;

  initClient(): void {
  }
}

