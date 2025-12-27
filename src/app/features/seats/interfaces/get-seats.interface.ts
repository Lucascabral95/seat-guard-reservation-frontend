export interface GetSeatsInterface {
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  section:   Section;
  number:    string;
  price:     number;
  status:    Status;
  lockedBy:  null;
  lockedAt:  null;
  eventId:   string;
}

export enum Section {
  General = "GENERAL",
  Platea = "PLATEA",
  Vip = "VIP",
}

export enum Status {
  Available = "AVAILABLE",
  Sold = "SOLD",
  Locked = "LOCKED"
}
