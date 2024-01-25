import { BaseObject } from "../Interfaces/BaseObject";
import { Product } from "./Product";

export interface Category extends BaseObject {
    categoryName: string;
    description: string;
    products?: Product[];
  }