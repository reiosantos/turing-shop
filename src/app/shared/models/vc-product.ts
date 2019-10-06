import { VcAttribute } from '@turing/shared/models/vc-attribute';
import { VcCategory } from '@turing/shared/models/vc-category';

export class VcProduct {
  productId: number;
  discountedPrice?: string;
  display?: number;
  image?: string;
  image2?: string;
  address2?: string;
  name?: string;
  price?: string;
  thumbnail?: string;
  description?: string;
  attributes: VcAttribute[];
  categories: VcCategory[];
}
