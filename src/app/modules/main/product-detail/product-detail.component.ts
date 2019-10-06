import { Component, Inject, OnInit, Optional } from '@angular/core';
import { VcProduct } from '@turing/shared/models/vc-product';
import { MAT_DIALOG_DATA } from '@angular/material';
import { VcItem } from '@turing/shared/models/vc-item';
import { VcProductClient } from '@turing/shared/interfaces/vc-product-client';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vc-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  title: string;
  product: VcProduct = new VcProduct();
  form: FormGroup;
  cartId: string;
  dialogCloseRef: () => void;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private matData: any,
    public vcProductClient: VcProductClient,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      attributes: new FormControl('LG, Red', [Validators.required]),
      quantity: new FormControl(1, [Validators.required, Validators.min(0)]),
    });
  }

  ngOnInit() {
    this.vcProductClient.cartId$.subscribe(value => this.cartId = value);

    if (this.matData) {
      this.title = this.matData.title;
      this.product = this.matData.dataObject;
      this.dialogCloseRef = this.matData.dialogCloseRef;
    }
  }

  addToCart = (product: VcProduct) => {
    if (!this.form.valid) {
      return;
    }

    const vcItem = new VcItem();
    vcItem.cartId = this.cartId;
    vcItem.productId = product.productId;
    vcItem.attributes = this.form.get('attributes') ? this.form.get('attributes').value : null;
    vcItem.quantity = this.form.get('quantity') ? this.form.get('quantity').value : null;

    this.vcProductClient.addItemToCart(vcItem)
      .subscribe(() => {
        this.dialogCloseRef();
      });
    return;
  };
}
