import { useState } from 'react'

import { useAppContext } from '../../../hooks'
import { Botao, CampoTexto, Loading, TIPO_BOTAO } from '../../../componentes'

import style from './ListaTarefasItem.module.css'

const ListaTarefasItem = (props) => {
    const { id, nome } = props

    const [estaEditando, setEstaEditando] = useState(false)

    const { editarTarefa, removerTarefa, loadingEditar, loadingDeletar } = useAppContext();

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id, nomeTarefa)

        setEstaEditando(false)
    }

    const loadingEstaEditando = loadingEditar == id
    const loadingEstaDeletando = loadingDeletar == id

    return (
        <li className={style.ListaTarefasItem}>
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto
                    defaultValue={nome}
                    onBlur={onBlurTarefa}
                    autoFocus
                />
            )}
            {!loadingEstaEditando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}

            {loadingEstaEditando && (
                <Loading/>
            )}

            <Botao
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)} 
                texto={loadingEstaDeletando ? <Loading/> : "-"}
            />

        </li>
    )
}

export { ListaTarefasItem }
