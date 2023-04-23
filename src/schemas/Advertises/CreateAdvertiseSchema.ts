import * as yup from "yup";
import { IAdvertisementRequest } from "../../interfaces/advertisement";

export const CreateAdvertiseSchema: any = yup.object().shape({
  brand: yup.string().required("Marca é obrigatória"),
  model: yup.string().required("Modelo é obrigatório"),
  year: yup.number().required("Ano é obrigatório"),
  fuel: yup.string().required("Combustível é obrigatório"),
  km: yup.number().required("Quilometragem é obrigatória"),
  color: yup.string().required("Cor é obrigatória").trim(),
  FIPE_price: yup.number().required(),
  price: yup.number().required("Preço é obrigatório"),
  description: yup.string().required("Descrição é obrigatório").trim(),

  //   //   is_good_sale: yup.boolean().required(),
  //   is_active: yup.boolean().required(),
  cover_img: yup.string().required("Imagem de capa é obrigatória").trim(),
  images: yup.array().notRequired(),
});
