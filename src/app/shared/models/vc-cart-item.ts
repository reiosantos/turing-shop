import { VcProduct } from '@turing/shared/models/vc-product';

export class VcCartItem {
  itemId: number;
  cartId: string;
  productId: number;
  attributes: string;
  quantity: number;
  buyNow: boolean;
  addedOn: string;
  product: VcProduct;
}
