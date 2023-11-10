import { FormEvent, useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { FormContainer } from "./styles";
import { TarefaContext } from "../../contexts/tarefaContext";

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}

export function CustomModal(props: PropsModal) {
    const { createTarefa, editarTarefa, funSetTarefasDefault, updateTarefa } = useContext(TarefaContext);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quadro, setQuadro] = useState("Quadro1"); // Defina um valor padrão, como 'Quadro1'

    useEffect(() => {
        if (editarTarefa.editar) {
            //tras o valor setado
            setTitulo(editarTarefa.tarefa?.titulo ? editarTarefa.tarefa.titulo : '')
            setDescricao(editarTarefa.tarefa?.descricao ? editarTarefa.tarefa.descricao : '')
        }
        console.log('todos')
    }, [editarTarefa.editar])

    function limparCamposEFecharModal() {
        funSetTarefasDefault();
        setTitulo('')
        setDescricao('')
        props.fecharModal()
    }
    //poderia ser OnsubmitModal
    function criarTarefa(event: FormEvent) {
        event.preventDefault()


        if (editarTarefa.editar && editarTarefa.tarefa) {
            let objTarefa = {
                ...editarTarefa.tarefa,
                titulo,
                descricao
            }
            updateTarefa(objTarefa)

        } else {
                createTarefa({
                    
                    titulo: titulo,
                    descricao,
                    quadro
                })
            }


        limparCamposEFecharModal()

    }

    return (
        <Modal
            isOpen={props.modalVisible}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={props.fecharModal}
        >
            <button
                type="button"
                className="react-modal-close"
                onClick={props.fecharModal}
            >
                X
            </button>

            <FormContainer onSubmit={criarTarefa}>
                <h2>Cadastrar Tarefa</h2>

                <input
                    type="text"
                    placeholder="Título"
                    required
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />
                <textarea
                    placeholder="Descrição"
                    required
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />
                <select
                    className="custom-select"
                    value={quadro}
                    onChange={(event) => setQuadro(event.target.value)}
                >
                    <option value="Quadro1">Quadro 1</option>
                    <option value="Quadro2">Quadro 2</option>
                    <option value="Quadro3">Quadro 3</option>
                </select>

                <button type="submit">Cadastrar</button>
            </FormContainer>
        </Modal>
    );
}
