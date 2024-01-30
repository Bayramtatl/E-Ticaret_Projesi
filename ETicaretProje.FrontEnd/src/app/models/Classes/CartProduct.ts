export class CartProduct {
  productId: number;
  productName:string;
  price:number;
  cartId: number;
  quantity: number;
  isActive?: boolean;
  /**
   *
   */
  constructor(productId: number,productName:string,price:number,cartId: number,quantity: number) {
    this.productId = productId;
    this.cartId = cartId;
    this.quantity = quantity;
    this.productName = productName;
    this.price = price;
    this.isActive = true;
  }
}