import { User } from "../Interfaces/User";
import { Address } from "./Adress";
import { Cart } from "./Cart";
import { Order } from "./Order";

export interface Customer extends User {
    phoneNumber: string;
    addressId: number;
    address: Address;
    cartId: number;
    cart: Cart;
    orders?: Order[];
  }