import { Address } from './Address';
import { Order } from './Order';
export interface Client {
    clientID: string;
    email: string;
    orders?: Order[];
    addresses: Address[];
}