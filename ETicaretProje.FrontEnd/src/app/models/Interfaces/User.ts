import { BaseObject } from "./BaseObject";

export interface User extends BaseObject {
    name: string;
    surname: string;
    email: string;
    password: string;
  }