export interface GetSeatByIDInterface {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  section:   string;
  number:    string;
  price:     number;
  status:    string;
  lockedBy:  null | string;
  lockedAt:  null | Date;
  eventId:   string;
  eventName: string;
}
