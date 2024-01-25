import { BaseObject } from "../Interfaces/BaseObject";
import { CartProduct } from "./CartProduct";
import { Customer } from "./Customer";

export interface Order extends BaseObject {
    customerId: number;
    customer: Customer;
    cartProducts?: CartProduct[];
    createdDate: Date;
  }