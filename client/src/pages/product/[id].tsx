import { getProduct, makeOffer } from "@/api/product";
import { useAuthContext } from "@/contexts/Auth";
import { Product } from "@/types/product";
import { offerSchema } from "@/validations/offerSchema";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Product = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { currentUser } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    getProduct(router.query.id as string)
      .then((response) => {
        if (response.data.success) {
          setProduct(response.data.product);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        offerPrice: 0,
      },
      onSubmit: (values) => {
        /* makeOffer(product.id, values.offerPrice)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          }); */
        console.log(values);
      },
      validationSchema: offerSchema,
    });

  return (
    <div className=" mx-auto w-full h-full  px-24 py-14 flex flex-row justify-center gap-36">
      <div className="shadow-item w-1/3 h-[700px] flex-shrink-0 text-left px-8 py-7 rounded-md">
        <div className="w-full h-full flex flex-col rounded-t-md">
          <h1 className="font-extrabold text-2xl mb-5">Product Info</h1>
          <div className="w-full h-1/2 relative flex-shrink-0">
            <img
              src={`http://localhost:4000${product?.image}`}
              alt=""
              className="rounded-t-lg h-full w-full object-cover"
            />
          </div>
          <div className="bg-black w-full flex-1  px-1 py-7  text-gray-100 flex flex-col gap-2 justify-between text-base">
            <div className="w-full flex justify-between  px-5">
              <div>Title</div>
              <div>{product?.title}</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Description</div>
              <div>test desc</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Start Price</div>
              <div>{product?.startPrice}</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Bidder</div>
              <div>{product?.user?.name || "-"}</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Last Offer</div>
              <div>{product?.lastOffer || "-"}</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Time</div>
              <div>{product?.lastOfferTime || "-"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-item w-1/3 self-start text-right px-8 py-7 rounded-md">
        <h1 className="font-extrabold text-2xl  mb-5">Offer</h1>

        {product?.user && product.user._id === currentUser?._id ? (
          <div className="px-5 py-3 bg-crimson  text-md text-white  text-center mb-5 ">
            Bu ürüne {product.lastOffer}₺ teklif verdiniz.
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="w-full flex  flex-col bg-black text-gray-100  p-5">
            <div className="flex justify-between items-center">
              <input
                type="number"
                name="offerPrice"
                value={values.offerPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your offer"
                className="text-black py-2 px-4 w-full"
              />
            </div>
            {errors.offerPrice && touched.offerPrice && (
              <div className="text-red-400 my-2 text-sm">
                {errors.offerPrice}
              </div>
            )}
          </div>
          <div>
            <button type="submit" className={`btn text-base  py-3 mt-6`}>
              Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
