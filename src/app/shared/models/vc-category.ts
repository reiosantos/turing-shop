import { VcProductCategory } from '@turing/shared/models/vc-product-category';

export class VcCategory {
  categoryId: number;
  departmentId?: number;
  name?: string;
  description?: string;
  productCategory?: VcProductCategory;
}
