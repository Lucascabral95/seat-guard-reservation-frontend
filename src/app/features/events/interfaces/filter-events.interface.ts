export interface FiltersEventsInterface {
  name?: string;
  gender?: Gender;
  location?: string;
}

export enum Gender {
  Electronica = "ELECTRONICA",
  Rock = "ROCK",
  Pop = "POP",
  Jazz = "JAZZ",
  Teatro = "TEATRO",
  Varios = "VARIOS",
  Metal = "METAL",
}
