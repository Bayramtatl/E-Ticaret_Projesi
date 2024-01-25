import { BaseObject } from "../Interfaces/BaseObject";
import { Customer } from "./Customer";

export interface Address extends BaseObject {
    description: string;
    county: string;
    city: string;
    customerId: number;
    customer?: Customer;
  }