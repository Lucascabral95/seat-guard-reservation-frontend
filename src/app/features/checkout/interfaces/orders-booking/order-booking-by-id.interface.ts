export interface GetOrderBookingByIDInterface {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  userId:    string;
  amount:    number;
  status:    string;
  seatIds:   string[];
  items:     Item[];
  paymentProviderId: string;
  eventName: string;
}

export interface Item {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  section:   string;
  number:    string;
  price:     number;
  status:    string;
  lockedBy:  string;
  lockedAt:  Date;
  eventId:   string;
}
