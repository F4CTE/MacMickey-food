import { OrderState } from './OrderState';
import { OrderDetail } from './OrderDetail';
export interface Order {
    orderID: number;
    orderDetails: OrderDetail[];
    orderState: OrderState;
    creationDateTime: string;
    lastModifiedDateTime: string;
    clientID: string;
}