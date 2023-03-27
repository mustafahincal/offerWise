import { UserDocument } from "./user.model";
import mongoose from "mongoose";

export interface ProductInput {
  user?: UserDocument["_id"];
  title: string;
  lastOffer?: number;
  minOffer: number;
  lastOfferTime?: Date;
  description: string;
  image: string;
}

export interface UpdateProductInput {
  user?: UserDocument["_id"];
  title: string;
  lastOffer?: number;
  minOffer: number;
  lastOfferTime?: Date;
  description: string;
  image: string;
}

export interface ProductDocument extends ProductInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    lastOffer: {
      type: Number,
      default: 0,
    },
    minOffer: {
      type: Number,
    },
    lastOfferTime: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<ProductDocument>("Product", productSchema);

export default Product;
