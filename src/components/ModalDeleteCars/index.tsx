import { DeleteCarModalStyled } from './styled'
import Button from '../button'
import { useContext } from 'react'
import { AdvertisementContext } from '../../context/AdvertisementContext'

export const DeleteCarModal = () => {

    const { deleteCarById, setStatusModalDelete, setCarDeleteId, statusModalDelete } = useContext(AdvertisementContext)

    const cancelDelete = () => {
        setStatusModalDelete('modalOff')
        setCarDeleteId('')
    }

    return (
        <DeleteCarModalStyled className={statusModalDelete}>

            <div className="container">
                <div className='containerHeader'>
                    <h4>Excluir anúncio</h4>
                    <button onClick={() => setStatusModalDelete('modalOff')}>X</button>
                </div>
                <div className='text'>
                    <b>Tem certeza que deseja remover este anúncio?</b>
                    <p>
                        Essa ação não pode ser desfeita.
                        Isso excluirá permanentemente o anúncio e o removerá de nossos servidores.
                    </p>
                </div>
                <div className='buttons'>
                    <Button
                        background='grey6'
                        hover='hover4'
                        size='3'
                        text='Cancelar'
                        border='solid 2px transparent'
                        color='grey2'
                        type='button'
                        onClick={cancelDelete}

                    />
                    <Button
                        background='alert2'
                        hover='hover9'
                        size='5'
                        text='Sim, excluir anúncio'
                        border='solid 2px transparent'
                        color='alert1'
                        type='button'
                        onClick={deleteCarById}
                    />
                </div>
            </div>

        </DeleteCarModalStyled>
    )
}