import { VcHttpClient } from '@turing/shared/interfaces/vc-http-client';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { VcUrls } from '@turing/core/providers/vc-urls';
import { VcProduct } from '@turing/shared/models/vc-product';
import { withDestroy } from '@turing/core/mixins/with-destroy';
import { map, takeUntil } from 'rxjs/operators';
import { VcCategory } from '@turing/shared/models/vc-category';
import { VcDepartment } from '@turing/shared/models/vc-department';
import { VcProductClient } from '@turing/shared/interfaces/vc-product-client';
import { VcItem } from '@turing/shared/models/vc-item';
import { VcCartItem } from '@turing/shared/models/vc-cart-item';

export class ProductService extends withDestroy() implements VcProductClient {
  private products: BehaviorSubject<{ count: number, rows: VcProduct[] }>
    = new BehaviorSubject({ count: 0, rows: [] });
  products$: Observable<{ count: number, rows: VcProduct[] }> = this.products.asObservable();

  private categories: BehaviorSubject<{ count: number, rows: VcCategory[] }>
    = new BehaviorSubject({ count: 0, rows: [] });
  categories$: Observable<{ count: number, rows: VcCategory[] }> = this.categories.asObservable();

  private departments: BehaviorSubject<VcDepartment[]> = new BehaviorSubject([]);
  departments$: Observable<VcDepartment[]> = this.departments.asObservable();

  private addedInCartItems: BehaviorSubject<VcCartItem[]> = new BehaviorSubject([]);
  addedInCartItems$: Observable<VcCartItem[]> = this.addedInCartItems.asObservable();

  private cartId: BehaviorSubject<string> = new BehaviorSubject(null);
  cartId$: Observable<string> = this.cartId.asObservable();

  constructor(private vcHttpClient: VcHttpClient) {
    super();
  }

  getAllProducts(limit = 20 , page = 0, descriptionLength = 200): Subscription {
    const query = { limit, page, description_length: descriptionLength };

    return this.vcHttpClient.get(VcUrls.getProductsUrl(query))
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: { count: number, rows: VcProduct[] }) => {
        this.products.next(products);
      });
  }

  getProductDetails(productId: number|string): Observable<VcProduct> {
    return this.vcHttpClient.get(VcUrls.getProductDetailUrl(productId))
      .pipe(takeUntil(this.destroy$));
  }

  getAllDepartments(): Subscription {
    return this.vcHttpClient.get(VcUrls.getDepartmentsUrl())
      .pipe(takeUntil(this.destroy$))
      .subscribe((departments: VcDepartment[]) => {
        this.departments.next(departments);
      });
  }

  getAllCategories(limit = 20 , page = 0, descriptionLength = 200): Subscription {
    const query = { limit, page, description_length: descriptionLength };

    return this.vcHttpClient.get(VcUrls.getCategoryUrl(query))
      .pipe(takeUntil(this.destroy$))
      .subscribe((categories: { count: number, rows: VcCategory[] }) => {
        this.categories.next(categories);
      });
  }

  addItemToCart(vcItem: VcItem): Observable<any> {
    return this.vcHttpClient.post(VcUrls.getAddItemUrl(), {
      cart_id: vcItem.cartId,
      product_id: vcItem.productId,
      quantity: vcItem.quantity,
      attributes: vcItem.attributes
    }).pipe(
      takeUntil(this.destroy$),
      map((items: VcCartItem[]) => {
        this.addedInCartItems.next(items);
        return items;
      })
    );
  }

  generateCartNumber(): Subscription {
    return this.vcHttpClient.get(VcUrls.generateCartIdUrl())
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.cartId.next(value.cart_id);
      });
  }

  initClient(): void {
    this.getAllCategories();
    this.getAllDepartments();
    this.getAllProducts();
    this.generateCartNumber();
  }
}
