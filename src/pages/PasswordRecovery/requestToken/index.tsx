import { PasswordRecoveryContainer } from "../styles"
import { Input } from "../../../components/input"
import { useForm } from "react-hook-form";
import { IPasswordRecovery } from "../../../interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { RequestPasswordRecoveryToken } from "../../../schema/Users";

export const RequestPasswordChangePage = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IPasswordRecovery>({resolver: yupResolver(RequestPasswordRecoveryToken)})

    const sendData = async (data: IPasswordRecovery) => {

    }

    return (
        <>
            <PasswordRecoveryContainer>
                <h3>Insira o email cadastrado na plataforma</h3>
                <form onSubmit={handleSubmit(sendData)}>
                    <Input
                        label="email"
                        type="email"
                        id="email"
                        register={register}
                        placeholder="Digite seu e-mail"
                    />
                </form>
                
            </PasswordRecoveryContainer>
        </>
    )
}