import { BaseObject } from "../Interfaces/BaseObject";
import { CartProduct } from "./CartProduct";
import { Customer } from "./Customer";

export interface Cart extends BaseObject {
    cartProducts?: CartProduct[];
    customerId: number;
    customer?: Customer;
  }