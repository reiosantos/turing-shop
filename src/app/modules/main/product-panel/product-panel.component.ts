import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit, ViewContainerRef
} from '@angular/core';
import { VcProductClient } from '@turing/shared/interfaces/vc-product-client';
import { VcProduct } from '@turing/shared/models/vc-product';
import { ToCamelCasePipe } from '@turing/shared/pipes/to-camel-case/to-camel-case.pipe';
import { withDestroy } from '@turing/core/mixins/with-destroy';
import { PageEvent } from '@angular/material';
import { ComponentType } from '@angular/cdk/overlay';
import {
  ProductDetailComponent
} from '@turing/modules/main/product-detail/product-detail.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'vc-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPanelComponent extends withDestroy() implements OnInit {

  private images: string[] = [
    'https://i.imgur.com/mVsFhyj.jpg',
    'https://i.imgur.com/88CaTdX.jpg',
    'https://i.imgur.com/Z4vhx1M.jpg',
    'https://i.imgur.com/W5kgVSf.jpg'
  ];
  // MatPaginator Inputs
  pageSizeOptions: number[] = [5, 10, 20, 25, 50, 100];
  // MatPaginator Output
  pageEvent: PageEvent = {
    length: 0,
    pageIndex: 0,
    pageSize: 20
  };
  fetchedData = false;
  title: string;
  product: VcProduct;
  openDialog = false;
  component: ComponentType<any>;

  constructor(
    public vcProductClient: VcProductClient,
    private toCamelCasePipe: ToCamelCasePipe,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private cd: ChangeDetectorRef
  ) {
    super();
    this.vcProductClient.initClient();
  }

  ngOnInit() {
  }

  randomImage (product: VcProduct) {
    if (this.images.indexOf(product.thumbnail) === -1) {
      product.thumbnail = this.getRandomImage();
    }
    return product;
  }

  convertToCamelCase = (products: { count: number; rows: VcProduct[] }|VcProduct): any => {

    if (products instanceof VcProduct || (typeof products === 'object' && !products.rows)) {
      // @ts-ignore
      return this.toCamelCasePipe.transform(this.randomImage(products));
    }

    products.rows = products.rows.map(product => this.randomImage(product));

    if (products.count > 1) {
      this.fetchedData = true;
    }
    this.pageEvent.pageIndex = 0;
    this.pageEvent.length = products.count;
    return this.toCamelCasePipe.transform(products.rows);
  };

  getRandomImage = (): string => {
    const rand = Math.floor(Math.random() * this.images.length);
    return this.images[rand];
  };

  onPageChange($event: PageEvent) {
    Object.assign(this.pageEvent, $event);
    const { pageIndex, pageSize } = $event;

    switch (this.vcProductClient.lastFetchAction) {
      case 'getInCategory':
        this.vcProductClient.getInCategory(
          this.vcProductClient.lastFetchCategoryId, pageSize, pageIndex);
        break;
      case 'getInDepartment':
        this.vcProductClient.getInDepartment(
          this.vcProductClient.lastFetchDepartmentId, pageSize, pageIndex);
        break;
      default:
        this.vcProductClient.getAllProducts(pageSize, pageIndex);
    }
  }

  viewDetails(product: VcProduct) {
    this.vcProductClient.getProductDetails(product.productId)
      .pipe(map((value: VcProduct) => this.convertToCamelCase(value)))
      .subscribe((pdt: VcProduct) => this.openModal(pdt, product.thumbnail));
  }

  openModal = (product: VcProduct, previousThumbnail?: string) => {
    product.thumbnail = previousThumbnail;
    this.title = product.name;
    this.product = product;
    const factory: ComponentFactory<ProductDetailComponent> =
      this.componentFactoryResolver.resolveComponentFactory(ProductDetailComponent);
    const component = this.viewContainerRef.createComponent(factory);
    this.component = component.componentType;
    this.openDialog = true;
    this.cd.detectChanges();
    this.viewContainerRef.remove();
  };

  hasDiscountedPrice(product: any) {
    return !!Number.parseInt(product.discountedPrice, 10);
  }
}
