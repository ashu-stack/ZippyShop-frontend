import { Customer } from "./customer";
import { Products } from "./product";

export interface Carts{
    products: Products[],
    modeOfPayment: string,
    customer: Customer
}