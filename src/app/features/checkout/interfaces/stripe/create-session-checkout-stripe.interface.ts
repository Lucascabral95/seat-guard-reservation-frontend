export interface CreateSessionCheckoutStripeInterface {
  userId:   string;
  currency: Currency;
  items:    Item[];
}

interface Item {
  seatIds: SeatIDS;
}

interface SeatIDS {
  id: string;
}

export enum Currency {
  usd = "USD",
  ars = "ARS"
}
