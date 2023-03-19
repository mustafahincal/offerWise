import { registerSchema } from "@/validations/registerSchema";
import { useFormik } from "formik";

const Signup = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: registerSchema,
    });

  return (
    <div className="w-full">
      <div className="w-1/3 m-auto py-10 shadow-item bg-white">
        <div className="w-4/5 m-auto">
          <h1 className="font-extrabold text-2xl mb-5 text-center">Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-base">
              <input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                type="text"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Ad"
              />
              {errors.name && touched.name && (
                <div className="text-red-400 my-2 text-sm">{errors.name}</div>
              )}
              <input
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                name="surname"
                type="text"
                className="text-darkBlue py-2 px-4 w-full mt-5"
                placeholder="Soyad"
              />
              {errors.surname && touched.surname && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.surname}
                </div>
              )}
              <div className="mt-5">
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
                  placeholder="Parola"
                />
                {errors.password && touched.password && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <input
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="passwordConfirm"
                  type="password"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Parolayı tekrar giriniz"
                />
                {errors.passwordConfirm && touched.passwordConfirm && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.passwordConfirm}
                  </div>
                )}
              </div>
            </div>

            <div className="text-right mt-5">
              <button type="submit" className={`btn text-base`}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
