import * as Yup from "yup";

export const offerSchema = Yup.object().shape({
  offerPrice: Yup.number().required(),
});
