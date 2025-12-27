export interface GetOrdersBookingInterface {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  userId:    string;
  amount:    number;
  status:    Status;
  seatIds:   string[];
}

export enum Status {
  Pending = "PENDING",
  Locked = "LOCKED",
  Sold = "SOLD"
}
