export interface ResponseCreateSessionCheckoutInterface {
  url: string;
  dataCheckout: DataCheckout;
}

interface DataCheckout {
  orderBookingId: string;
  userId: string;
  currency: Currency;
  items: Items[];
}

enum Currency {
  usd = "USD",
  ars = "ARS"
}

interface Items {
name: string;
amount: number;
seatIds: {
  id: string;
}
}
