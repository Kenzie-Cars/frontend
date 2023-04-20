import * as yup from "yup";

const CreateUserSchema: any = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  birthdate: yup.date().required("Data de nascimento é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Deve ser igual a senha"),
  is_seller: yup.boolean().required("Escolha uma opção").default(false),
  address: yup.object().shape({
    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
  }),
});

export { CreateUserSchema };
