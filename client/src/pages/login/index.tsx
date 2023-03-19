import { loginSchema } from "@/validations/loginSchema";
import { useFormik } from "formik";
import Link from "next/link";

const Login = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: loginSchema,
    });

  return (
    <div className="w-full">
      <div className="w-1/3 m-auto py-10 shadow-item bg-white">
        <div className="w-4/5 m-auto">
          <h1 className="font-extrabold text-2xl mb-5 text-center">Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100 px-10 py-10 text-base">
              <div>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  type="text"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  type="password"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Şifre"
                />
                {errors.password && touched.password && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.password}
                  </div>
                )}
              </div>
            </div>
            <Link
              href={"/signup"}
              type="submit"
              className="mt-5 border-2 border-darkBlue text-darkBlue bg-white  w-full py-2 text-center text-base hover:bg-darkBlue hover:text-white transition-all duration-200 rounded"
            >
              Hesabın yok mu? Kayıt Ol!
            </Link>
            <div className="text-right mt-5">
              <button type="submit" className={`btn text-base py-2 `}>
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
