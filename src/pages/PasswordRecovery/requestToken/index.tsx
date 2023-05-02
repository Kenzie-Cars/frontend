import { PasswordRecoveryContainer } from "../styles"
import { Input } from "../../../components/input"
import { useForm } from "react-hook-form";
import { IPasswordRecovery } from "../../../interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { RequestPasswordRecoveryToken } from "../../../schema/Users";
import { RequestApiKenzieKars } from "../../../Requests/RequestApiKenzieKars";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import Button from "../../../components/button";
import { toast } from "react-toastify";

export const RequestPasswordChangePage = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IPasswordRecovery>({resolver: yupResolver(RequestPasswordRecoveryToken)})

    const sendData = async (data: IPasswordRecovery) => {
        const response = await RequestApiKenzieKars.post('forgotpassword/', data)

        toast.success(response.data.message)
    }

    return (
        <>
            <Navbar/>
            <PasswordRecoveryContainer>
                <h2>Recuperação de senha</h2>
                <div className="main-container">
                    <h3>Insira o email cadastrado na plataforma</h3>
                    <form onSubmit={handleSubmit(sendData)}>
                        <Input
                            label=""
                            type="email"
                            id="email"
                            register={register}
                            placeholder="Digite seu e-mail"
                        />

                        <Button
                            size="1"
                            hover="1"
                            background=""
                            type="submit"
                            text="enviar"
                        />
                    </form>
                </div>
            </PasswordRecoveryContainer>
            <Footer/>
        </>
    )
}