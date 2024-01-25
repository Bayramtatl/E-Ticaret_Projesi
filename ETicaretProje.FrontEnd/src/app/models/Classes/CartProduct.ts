import { BaseObject } from "../Interfaces/BaseObject";

export interface CartProduct extends BaseObject {
  productId: number;
  cartId: number;
  quantity: number;
}