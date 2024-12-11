import { Application } from "express"
import { setRoutesFuncionario } from "./casosDeUso/funcionario/setRoutesFuncionario"


export function setRoutes(baseUrlPath: string, expressApp: Application) {
setRoutesFuncionario(baseUrlPath, expressApp)
}
