import { PasswordRecoveryContainer } from "../styles"
import { Input } from "../../../components/input"
import { useForm } from "react-hook-form";
import { IPasswordChange, IPasswordRecovery } from "../../../interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { RequestPasswordChange, RequestPasswordRecoveryToken } from "../../../schema/Users";
import { RequestApiKenzieKars } from "../../../Requests/RequestApiKenzieKars";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import Button from "../../../components/button";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export const PasswordChangePage = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IPasswordChange>({resolver: yupResolver(RequestPasswordChange)})

    const {token} = useParams()

    const sendData = async (data: IPasswordChange) => {
        console.log(data)

        const response = await RequestApiKenzieKars.patch(`resetPassword/${token}`, data)

        toast.success(response.data.message)
    }

    return (
        <>
            <Navbar/>
            <PasswordRecoveryContainer>
                <h2>Recuperação de senha</h2>
                <div className="main-container">
                    <h3>Insira sua nova senha</h3>
                    <form onSubmit={handleSubmit(sendData)}>

                        <Input
                            label=""
                            type="password"
                            id="password"
                            register={register}
                            placeholder="Digite sua nova senha"
                            errors={errors.password?.message}
                        />

                        <Input
                            label=""
                            type="password"
                            id="passwordConfirmation"
                            register={register}
                            placeholder="Confirme sua senha"
                            errors={errors.passwordConfirmation?.message}
                        />

                        <Button
                            size="1"
                            hover="1"
                            background=""
                            type="submit"
                            text="confirmar"
                        />
                    </form>
                </div>
            </PasswordRecoveryContainer>
            <Footer/>
        </>
    )
}