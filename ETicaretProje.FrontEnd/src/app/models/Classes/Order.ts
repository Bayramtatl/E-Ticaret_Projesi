import { BaseObject } from '../Interfaces/BaseObject';
import { CartProduct } from './CartProduct';
import { Customer } from './Customer';

export class Order {
  customerId?: number;
  customer?: Customer;
  cartProducts?: CartProduct[];
  createdDate?: Date;
}
