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
