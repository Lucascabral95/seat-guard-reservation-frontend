export interface GetMyTicketByIDInterface {
  id:                string;
  createdAt:         Date;
  updatedAt:         Date;
  userId:            string;
  amount:            number;
  status:            StatusBuy;
  seatIds:           string[];
  items:             Item[];
  paymentProviderId: string;
  eventName:         string;
  eventHour:   string;
}

export interface Item {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  section:   string;
  number:    string;
  price:     number;
  status:    StatusSeat;
  lockedBy:  string;
  lockedAt:  Date;
  eventId:   string;
  eventName?: string;
  eventHour?: string;
}

enum StatusSeat {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  SOLD = 'sold'
}

enum StatusBuy {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed'
}

