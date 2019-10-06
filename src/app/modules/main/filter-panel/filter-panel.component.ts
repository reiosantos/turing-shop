import { Component, OnInit } from '@angular/core';
import { VcProductClient } from '@turing/shared/interfaces/vc-product-client';
import { VcCartItem } from '@turing/shared/models/vc-cart-item';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'vc-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  form: FormGroup;

  constructor(
    public vcProductClient: VcProductClient,
    private fb: FormBuilder
  ) {
    this.vcProductClient.initClient();
    this.form = this.fb.group({
      search: new FormControl('')
    });
  }

  ngOnInit() {
  }

  displayText(item: VcCartItem|any) {
    const product = item.product;
    const price = !!Number.parseInt(product.discountedPrice, 10)
      ? product.discountedPrice
      : product.price;

    return `${ product.name } - [${ item.quantity }](@)-\$${ price }`;
  }

  searchTerm() {
    const term = this.form.get('search').value;
    this.vcProductClient.searchProducts(term);
  }

  filterByDepartment(event: MatSelectChange) {
    this.vcProductClient.getInDepartment(event.value);
  }

  filterByCategory(event: MatSelectChange) {
    this.vcProductClient.getInCategory(event.value);
  }
}
