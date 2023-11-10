import axios from "axios";
import {
    ReactNode,
    createContext,
    useState,
    useEffect
} from "react";

interface Tarefas {
    id: string;
    titulo: string;
    descricao: string;
    quadro: string;
}

interface Tarefassemid {
    titulo: string;
    descricao: string;
    quadro: string;
}

interface DataEditarTarefa {
    editar: boolean;
    tarefa: Tarefas| null;
    
}

interface PropsTarefaContext {
    tarefas: Array<Tarefas>;
    createTarefa: (tarefas: Tarefassemid) => Promise<void>;
    updateTarefa: (tarefas: Tarefas)=> Promise<void>
    deleteTarefa: (id: string) => Promise<void>;
    funEditarTarefa: (tarefas: DataEditarTarefa) => void;
    funSetTarefasDefault: () => void;
    editarTarefa: DataEditarTarefa;
}

export const TarefaContext = createContext(
    {} as PropsTarefaContext
);

interface PropsTarefaProvider {
    children: ReactNode;
}

export function TarefasProvider({ children }: PropsTarefaProvider) {
    const [tarefas, setTarefas] = useState([]);
    const [editarTarefa, setEditarTarefas] = useState<DataEditarTarefa>({editar:false, tarefa:null})

    useEffect(() => {
        axios.get('/api/tarefas')
            .then((res) => {
                console.log(res.data);
                setTarefas(res.data.tarefas);
            });
    }, []);

    async function createTarefa(data: Tarefassemid) {
        const resposta = await axios.post('/api/tarefas', data);

        axios.get('/api/tarefas')
            .then((res) => {
                setTarefas(res.data.tarefas);
            });
    }

    async function deleteTarefa(id: string) {
        await axios.delete(`/api/tarefas/${id}`);

        axios.get('/api/tarefas')
            .then((res) => {
                setTarefas(res.data.tarefas);
            });
    }

    async function updateTarefa(data: Tarefas) {
        //para atualiar utiliza put
        const resposta = await axios.put('/api/tarefas', data)

        axios.get('/api/tarefas')//5min
            .then((res) => {
                setTarefas(res.data.tarefas)
            })
    }
    //volta por padrão vazio
    function  funSetTarefasDefault (){
        setEditarTarefas({editar:false, tarefa:null})
    }

    //seta a tarefa que vem do editar tarefa
    function  funEditarTarefa (data: DataEditarTarefa){
        setEditarTarefas(data)
    }





    return (
        <TarefaContext.Provider value={{
            tarefas,
            deleteTarefa,
            createTarefa,
            editarTarefa,
            funEditarTarefa,
            funSetTarefasDefault,
            updateTarefa

        }}>
            {children}
        </TarefaContext.Provider>
    )
}
