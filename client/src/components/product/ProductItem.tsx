import { Product } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/router";

interface ProductItemProps {
  product: Product;
}
const ProductItem = ({ product }: ProductItemProps) => {
  const router = useRouter();
  return (
    <div
      className="bg-white shadow-item col-span-2 inline-block h-[400px] cursor-pointer rounded-lg flex flex-col"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <div className="w-full h-60 relative flex-shrink-0">
        <Image
          src={product.image}
          alt=""
          fill
          object-fit="cover"
          className="rounded-t-lg"
          priority
          sizes="100%"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between py-5">
        <div>{product.title}</div>
        <div>Current Offer {product.currentOffer}</div>
        <button className="btn bg-crimson">Make Offer</button>
      </div>
    </div>
  );
};

export default ProductItem;
