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
  gender:       Gender;
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

enum Gender {
  Electronica = "ELECTRONICA",
  Rock = "ROCK",
  Pop = "POP",
  Jazz = "JAZZ",
  Teatro = "TEATRO",
  Metal = "METAL",
  Varios = "VARIOS",
}
