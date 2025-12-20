export interface Events {
  id:           string;
  createdAt:    Date;
  updatedAt:    Date;
  name:         string;
  description:  string;
  location:     string;
  date:         Date;
  price:        number;
  posterUrl:    string;
  availability: string;
  seats:        Seat[];
}

interface Seat {
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

enum Section {
  General = "GENERAL",
  Platea = "PLATEA",
  Vip = "VIP",
}

enum Status {
  Available = "AVAILABLE",
}
