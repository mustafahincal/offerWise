export interface Product {
  _id: string;
  userId?: string | null;
  title: string;
  lastOffer: number;
  startPrice: number;
  description: string;
  image: string;
  lastOfferTime?: string;
}
