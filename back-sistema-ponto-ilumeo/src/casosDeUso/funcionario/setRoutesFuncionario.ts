import { Application } from "express";
import { funcionarioBuscarPorCodigoRouter } from "./buscarPorCodigo/buscarPorCodigo.router";


export function setRoutesFuncionario(baseUrlPath: string, expressApp: Application) {
    expressApp.use(baseUrlPath, funcionarioBuscarPorCodigoRouter())
}
