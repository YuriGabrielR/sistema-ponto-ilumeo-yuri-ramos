import { RouteObject } from "react-router-dom";
import { rotasApp } from "./rotasApp";
import { Funcionario } from "../@global/paginas/autenticadas/Funcionario/Funcionario.pagina";


export const rotasAutenticadas: RouteObject[] =[

    {
        path: rotasApp.funcionarioPage(':codigoFuncionario'), 
        element: <Funcionario/>
    }
]

