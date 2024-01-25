import { BaseObject } from "../Interfaces/BaseObject";
import { Category } from "./Category";

export interface Product extends BaseObject {
  name: string;
  description: string;
  imageUrl: string;
  categoryId: number;
  category?: Category;
  price: string;
}