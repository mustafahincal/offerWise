export interface Product {
  id: string;
  userId?: string | null;
  title: string;
  lastOffer: number;
  minOffer: number;
  description: string;
  image: string;
  lastOfferTime?: string;
}
