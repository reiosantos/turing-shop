import { Component, OnInit } from '@angular/core';
import { VcProductClient } from '@turing/shared/interfaces/vc-product-client';
import { VcCartItem } from '@turing/shared/models/vc-cart-item';

@Component({
  selector: 'vc-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  constructor(
    public vcProductClient: VcProductClient
  ) {
    this.vcProductClient.initClient();
  }

  ngOnInit() {
  }

  displayText(item: VcCartItem|any) {
    const product = item.product;
    console.log(item);
    const price = !!Number.parseInt(product.discountedPrice, 10)
      ? product.discountedPrice
      : product.price;

    return `${ product.name } - [${ item.quantity }](@)-\$${ price }`;
  }
}
