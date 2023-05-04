import * as yup from "yup";

export const CreateCommentSchema: any = yup.object().shape({
  comment: yup.string().required("Comentário obrigatório"),
});
