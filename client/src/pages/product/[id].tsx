import { makeOffer } from "@/api/product";
import { Product } from "@/types/product";
import { offerSchema } from "@/validations/offerSchema";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        offerPrice: 0,
      },
      onSubmit: (values) => {
        makeOffer(product.id, values.offerPrice)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      validationSchema: offerSchema,
    });

  return (
    <div className=" mx-auto w-full h-full  px-24 py-14 flex flex-row justify-center gap-36">
      <div className="shadow-item w-1/3 h-[700px] flex-shrink-0 text-left px-8 py-7 rounded-md">
        <div className="w-full h-full flex flex-col rounded-t-md">
          <h1 className="font-extrabold text-2xl mb-5">Product Info</h1>
          <div className="w-full h-1/2 relative flex-shrink-0">
            <Image
              src={product.image}
              alt=""
              fill
              object-fit="cover"
              priority
              sizes="100%"
            />
          </div>
          <div className="bg-black w-full flex-1  px-1 py-7  text-gray-100 flex flex-col gap-2 justify-between text-base">
            <div className="w-full flex justify-between  px-5">
              <div>Title</div>
              <div>{product.title}</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Description</div>
              <div>test desc</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Minimum Offer</div>
              <div>{product.minOffer}</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Last Offer</div>
              <div>{product.lastOffer}</div>
            </div>
            <div className="w-full flex justify-between  px-5">
              <div>Last Offer Time</div>
              <div>{product.lastOfferTime}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-item w-1/3 self-start text-right px-8 py-7 rounded-md">
        <h1 className="font-extrabold text-2xl  mb-5">Offer</h1>

        <div className="px-5 py-3 bg-crimson  text-md text-white  text-center mb-5 ">
          Bu ürüne 500₺ teklif verdiniz.
        </div>

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

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const response = await axios.get(`http://localhost:3000/api/products/${id}`);
  const product = response.data;
  return {
    props: {
      product,
    },
  };
};

export default Product;
