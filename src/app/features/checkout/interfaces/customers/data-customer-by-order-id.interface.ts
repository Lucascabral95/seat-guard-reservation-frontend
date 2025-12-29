export interface GetDataCustomerByOrderIDInterface {
  id:              string;
  createdAt:       Date;
  updatedAt:       Date;
  orderId:         string;
  order:           Order;
  paymentProvider: string;
  paymentIntentId: string;
  currency:        Currency;
  amount:          number;
  customerEmail:   string;
  customerName:    string;
}

export interface Order {
  id:                string;
  createdAt:         Date;
  updatedAt:         Date;
  userId:            string;
  amount:            number;
  status:            OrderStatus;
  seatIds:           string[];
  items:             Item[];
  paymentProviderId: string;
}

export interface Item {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  section:   string;
  number:    string;
  price:     number;
  status:    ItemStatus;
  lockedBy:  string;
  lockedAt:  Date;
  eventId:   string;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ItemStatus {
  AVAILABLE = 'AVAILABLE',
  LOCKED = 'LOCKED',
  SOLD = 'SOLD',
}

export enum Currency {
  USD = 'usd',
  ARS = 'ars',
}
