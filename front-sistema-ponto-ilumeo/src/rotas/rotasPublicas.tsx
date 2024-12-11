import { RouteObject } from "react-router-dom";
import { LoginPagina } from "../@global/paginas/publicas/Login.pagina";

export const ROTA_INICIAL = '/'

export const rotasPublicas: RouteObject[] =[

    {
        path: ROTA_INICIAL,
        element: <LoginPagina />,
    }

]

