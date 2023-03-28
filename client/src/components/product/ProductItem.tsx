import { Product } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/router";

interface ProductItemProps {
  product: Product;
}
const ProductItem = ({ product }: ProductItemProps) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-item col-span-3 h-[450px]  rounded-lg flex flex-col">
      <div className="w-full h-60 relative flex-shrink-0">
        <img
          src={`http://localhost:4000${product.image}`}
          alt=""
          className="rounded-t-lg h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between py-4 gap-1">
        <div className="w-full flex justify-between  px-3">
          <div>Title</div>
          <div>{product.title}</div>
        </div>
        <div className="w-full flex justify-between  px-3">
          <div>Description</div>
          <div>some desc</div>
        </div>
        <div className="w-full flex justify-between  px-3">
          <div>Start Price</div>
          <div>{product.startPrice}</div>
        </div>
        <div className="w-full flex justify-between  px-3">
          <div>Last Offer</div>
          <div>{product.lastOffer ? 0 : "-"}</div>
        </div>
        <button
          className="btn mt-3 bg-crimson"
          onClick={() => router.push(`/product/${product._id}`)}
        >
          Make Offer
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
