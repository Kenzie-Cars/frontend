import * as yup from "yup";

export const CreateAdvertiseSchema: any = yup.object().shape({
  brand: yup.string().required("Marca é obrigatória"),
  model: yup.string().required("Modelo é obrigatório"),
  year: yup.number().required("Ano é obrigatório"),
  fuel: yup.string().required("Combustível é obrigatório"),
  km: yup.number().required("Quilometragem é obrigatória"),
  color: yup.string().required("Cor é obrigatória").trim(),
  FIPE_price: yup.number().notRequired(),
  price: yup.number().required("Preço é obrigatório"),
  description: yup.string().required("Descrição é obrigatório").trim(),
  is_goodSale: yup.boolean().notRequired(),
  is_active: yup.boolean().notRequired(),
  cover_img: yup.string().required("Imagem de capa é obrigatória").trim(),
  images: yup.array().notRequired(),
});
