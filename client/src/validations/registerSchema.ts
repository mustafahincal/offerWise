import * as Yup from "yup";
export const registerSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8).max(20),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required(),
});
