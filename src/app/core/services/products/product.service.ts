import {VcHttpClient} from '@turing/shared/interfaces/vc-http-client';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {VcUrls} from '@turing/core/providers/vc-urls';
import {VcProduct} from '@turing/shared/models/vc-product';
import {withDestroy} from '@turing/core/mixins/with-destroy';
import {takeUntil} from 'rxjs/operators';
import {VcCategory} from '@turing/shared/models/vc-category';
import {VcDepartment} from '@turing/shared/models/vc-department';
import {VcProductClient} from '@turing/shared/interfaces/vc-product-client';

export class ProductService extends withDestroy() implements VcProductClient {
  private products: BehaviorSubject<{ count: number, rows: VcProduct[] }>
    = new BehaviorSubject({ count: 0, rows: [] });
  products$: Observable<{ count: number, rows: VcProduct[] }> = this.products.asObservable();

  private categories: BehaviorSubject<{ count: number, rows: VcCategory[] }>
    = new BehaviorSubject({ count: 0, rows: [] });
  categories$: Observable<{ count: number, rows: VcCategory[] }> = this.categories.asObservable();

  private departments: BehaviorSubject<VcDepartment[]> = new BehaviorSubject([]);
  departments$: Observable<VcDepartment[]> = this.departments.asObservable();

  constructor(private vcHttpClient: VcHttpClient) {
    super();
  }

  getAllProducts(): Subscription {
    return this.vcHttpClient.get(VcUrls.getProductsUrl())
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: { count: number, rows: VcProduct[] }) => {
        this.products.next(products);
      });
  }

  getAllDepartments(): Subscription {
    return this.vcHttpClient.get(VcUrls.getDepartmentsUrl())
      .pipe(takeUntil(this.destroy$))
      .subscribe((departments: VcDepartment[]) => {
        this.departments.next(departments);
      });
  }

  getAllCategories(): Subscription {
    return this.vcHttpClient.get(VcUrls.getCategoryUrl())
      .pipe(takeUntil(this.destroy$))
      .subscribe((categories: { count: number, rows: VcCategory[] }) => {
        this.categories.next(categories);
      });
  }

  initClient(): void {
    this.getAllCategories();
    this.getAllDepartments();
    this.getAllProducts();
  }
}
