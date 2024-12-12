import { Application } from "express"
import { setRoutesFuncionario } from "./casosDeUso/funcionario/setRoutesFuncionario"
import { setRoutesTurno } from "./casosDeUso/turno/setRoutesTurno"


export function setRoutes(baseUrlPath: string, expressApp: Application) {
 setRoutesFuncionario(baseUrlPath, expressApp)
 setRoutesTurno(baseUrlPath, expressApp)
}
