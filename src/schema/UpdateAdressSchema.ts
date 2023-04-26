import * as yup from "yup";

export const UpdateAdressSchema = yup.object().shape({
  cep: yup.string().notRequired(),
  state: yup.string().notRequired(),
  city: yup.string().notRequired(),
  street: yup.string().notRequired(),
  number: yup.string().notRequired(),
  complement: yup.string().notRequired(),
});
