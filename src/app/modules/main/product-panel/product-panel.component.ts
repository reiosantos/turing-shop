import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { VcProductClient } from '@turing/shared/interfaces/vc-product-client';
import { VcProduct } from '@turing/shared/models/vc-product';
import { ToCamelCasePipe } from '@turing/shared/pipes/to-camel-case/to-camel-case.pipe';
import { withDestroy } from '@turing/core/mixins/with-destroy';

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

  constructor(
    public vcProductClient: VcProductClient,
    private toCamelCasePipe: ToCamelCasePipe
  ) {
    super();
    this.vcProductClient.initClient();
  }

  ngOnInit() {
  }

  convertToCamelCase = (products: { count: number; rows: VcProduct[] }): VcProduct[] => {
    products.rows = products.rows.map((product) => {
      if (this.images.indexOf(product.thumbnail) === -1) {
        product.thumbnail = this.getRandomImage();
      }
      return product;
    });
    return this.toCamelCasePipe.transform(products.rows);
  };

  getRandomImage = (): string => {
    const rand = Math.floor(Math.random() * this.images.length);
    return this.images[rand];
  };

  viewDetails(product: VcProduct) {
    console.log(product);
  }

  addToCart(product: VcProduct) {
    console.log(product);
  }
}
