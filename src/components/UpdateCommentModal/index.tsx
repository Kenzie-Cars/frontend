import { UpdateCommentStyled } from './styled'
import { Textarea } from '../input'
import { CreateCommentSchema } from '../../schema/CreateCommentSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import { ICommentRequest } from '../../interfaces/comments';
import Button from '../button';
import { useContext } from 'react';
import { AdvertisementContext } from '../../context/AdvertisementContext';


export const UpdateCommentModal = ({ loadComments }: any) => {

    const { deleteComments, updateComments, statusCommentsModal, setStatusCommentsModal, valueComment, setValueComment } = useContext(AdvertisementContext);

    const {
        register,
        handleSubmit,
        formState: {
            errors: { comment },
        },
    } = useForm<ICommentRequest>({
        resolver: yupResolver(CreateCommentSchema),
    });

    const deleteComment = async () => {
        const status = await deleteComments()
        if (status == 204) {
            await loadComments()
        }
    }

    const update = async (data: any) => {
        const status = await updateComments(data)
        if (status == 200) {
            await loadComments()
        }
    }

    return (
        <UpdateCommentStyled className={statusCommentsModal}>

            <div className='container'>
                <h3>Editar comentário</h3>
                <form onSubmit={handleSubmit(update)}>
                    <Textarea
                        id='comment'
                        label='Editar comentário'
                        length={500}
                        row={4}
                        placeHolder='Editar comentário'
                        register={register}
                        value={valueComment}
                        onChange={setValueComment}
                    />
                    <div className='buttons'>
                        <Button
                            background='grey5'
                            hover='hover7'
                            size='6'
                            text='Cancelar'
                            border='2px solid transparent'
                            color='grey2'
                            type='button'
                            onClick={() => setStatusCommentsModal("modalOff")}

                        />
                        <Button
                            background='alert2'
                            hover='hover9'
                            size='6'
                            text='Deletar'
                            border='none'
                            color='alert1'
                            type='button'
                            onClick={() => deleteComment()}


                        />
                        <Button
                            background='brand2'
                            hover='hover2'
                            size='6'
                            text='Editar'
                            border='2px solid transparent'
                            color='grey10'
                            type='submit'

                        />
                    </div>
                </form>
            </div>

        </UpdateCommentStyled>
    )
}