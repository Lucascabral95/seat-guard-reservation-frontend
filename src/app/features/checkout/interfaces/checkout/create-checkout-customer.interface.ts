export interface CreateCheckoutCustomerInterface {
  id:               string;
  createdAt:        Date;
  updatedAt:        Date;
  orderId:          string;
  order:            Order;
  paymentProvider:  string;
  currency:         Currency;
  amount:           number;
  customerEmail:    string;
  customerName:     string;
  customerId:       string;
}

interface Order {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  userId:    string;
  amount:    number;
  status:    StatusOrder;
  seatIds:   string[];
  items:     Item[];
}

interface Item {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  section:   string;
  number:    string;
  price:     number;
  status:    StatusItem;
  lockedBy:  string;
  lockedAt:  Date;
  eventId:   string;
}

export enum Currency {
  USD = 'usd',
  ARS = 'ars',
}

enum StatusOrder {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

enum StatusItem {
  AVAILABLE = 'AVAILABLE',
  LOCKED = 'LOCKED',
  SOLD = 'SOLD',
}
