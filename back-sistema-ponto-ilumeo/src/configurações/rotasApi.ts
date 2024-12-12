import { rotasApiFuncionario } from "./rotas/rotasApiFuncionario";
import { rotasApiTurno } from "./rotas/rotasApiTurno";

export const rotasApi = {
    ...rotasApiFuncionario, 
    ...rotasApiTurno
}