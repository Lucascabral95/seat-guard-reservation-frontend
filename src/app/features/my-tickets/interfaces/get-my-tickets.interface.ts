export interface GetMyTicketsInterface {
  id:                 string;
  createdAt:          Date;
  updatedAt:          Date;
  userId:             string;
  amount:             number;
  status:             BuyStatus;
  seatIds:            string[];
  items:              Item[];
  paymentProviderId?: string;
  eventName?:         string;
  eventHour?: string;
}

interface Item {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  section:   string;
  number:    string;
  price:     number;
  status:    TicketStatus;
  lockedBy:  string;
  lockedAt:  Date;
  eventId:   string;
  eventName?: string;
  eventHour?: string;
}

enum TicketStatus {
  AVAILABLE = 'available',
  LOCKED = 'locked',
  SOLD = 'sold'
}

export enum BuyStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}
