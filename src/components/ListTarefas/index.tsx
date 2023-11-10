import React, { useContext } from "react";
import { Container } from "./styles";
import { TarefaContext } from "../../contexts/tarefaContext";

interface PropsListTarefas {
    abrirModal: () => void;
}

export function ListTarefas(props: PropsListTarefas) {

    const { tarefas, deleteTarefa, funEditarTarefa } = useContext(TarefaContext);


    const handleDeleteTarefa = (id: string) => {
        deleteTarefa(id);
    };

    return (
        <>
            <Container>
                <div className="quadro">
                    <h3>Quadro 1</h3>
                    <ul>
                        {tarefas
                            .filter((tarefa) => tarefa.quadro === "Quadro1")
                            .map((tarefa, index) => (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <button 
                                            type="submit"
                                            onClick={() => {
                                                //o editar é para ajuste tecnico
                                                funEditarTarefa({ editar: true, tarefa: tarefa })
                                                props.abrirModal();
                                            }}
                                        >
                                            Editar
                                        </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDeleteTarefa(tarefa.id)
                                        }
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="quadro">
                    <h3>Quadro 2</h3>
                    <ul>
                        {tarefas
                            .filter((tarefa) => tarefa.quadro === "Quadro2")
                            .map((tarefa, index) => (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <button 
                                            type="submit"
                                            onClick={() => {
                                                //o editar é para ajuste tecnico
                                                funEditarTarefa({ editar: true, tarefa: tarefa })
                                                props.abrirModal();
                                            }}
                                        >
                                            Editar
                                        </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDeleteTarefa(tarefa.id)
                                        }
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="quadro">
                    <h3>Quadro 3</h3>
                    <ul>
                        {tarefas
                            .filter((tarefa) => tarefa.quadro === "Quadro3")
                            .map((tarefa, index) => (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <button 
                                            type="submit"
                                            onClick={() => {
                                                //o editar é para ajuste tecnico
                                                funEditarTarefa({ editar: true, tarefa: tarefa })
                                                props.abrirModal();
                                            }}
                                        >
                                            Editar
                                        </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDeleteTarefa(tarefa.id)
                                        }
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            </Container>
        </>
    );
}
