import * as yup from "yup";

const CreateUserSchema: any = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  cpf: yup.string().min(11).required("CPF é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  birthDate: yup.string().required("Data de nascimento é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatório")
    .oneOf([yup.ref("password")], "Senha não confere"),
  is_seller: yup.boolean().required("Escolha uma opção").default(false),
  is_adm: yup.boolean().notRequired().default(false),
  address: yup.object().shape({
    cep: yup.string().required("CEP obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatório"),
    street: yup.string().required("Rua obrigatório"),
    number: yup.string().required("Número obrigatório"),
    complement: yup.string().notRequired().default(null),
  }),
});

const UpdateUserSchema: any = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  cpf: yup.string().min(11).notRequired(),
  phone: yup.string().notRequired(),
  birthDate: yup.string().notRequired(),
  description: yup.string().notRequired(),
  address: yup.object().shape({
    cep: yup.string().notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
    street: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired().default(null),
  }),
});

export { CreateUserSchema, UpdateUserSchema };
