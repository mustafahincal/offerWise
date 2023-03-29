import { User } from "./user";

export interface Product {
  _id: string;
  user?: User;
  title: string;
  lastOffer: number;
  startPrice: number;
  description: string;
  image: string;
  lastOfferTime?: string;
}
