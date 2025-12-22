export interface EventByIdInterface {
  id:           string;
  createdAt:    Date;
  updatedAt:    Date;
  name:         string;
  description:  string;
  location:     string;
  date:         Date;
  price:        number;
  posterUrl:    string;
  gender:       Gender;
  availability: string;
  seats:        Seat[];
}

export interface Seat {
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
}

enum Gender {
  Electronica = "ELECTRONICA",
  Rock = "ROCK",
  Pop = "POP",
  Jazz = "JAZZ",
  Teatro = "TEATRO",
  Varios = "VARIOS",
  Metal = "METAL",
}
