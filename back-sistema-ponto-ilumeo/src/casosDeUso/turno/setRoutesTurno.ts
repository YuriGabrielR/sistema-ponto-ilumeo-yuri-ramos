import { Application } from "express";
import { turnoCriarRouter } from "./criar/turnoCriar.router";
import { turnoFinalizar } from "./finalizarTurno/turnoFinalizar.router";



export function setRoutesTurno(baseUrlPath: string, expressApp: Application) {
    expressApp.use(baseUrlPath, turnoCriarRouter())
    expressApp.use(baseUrlPath,turnoFinalizar())
}
