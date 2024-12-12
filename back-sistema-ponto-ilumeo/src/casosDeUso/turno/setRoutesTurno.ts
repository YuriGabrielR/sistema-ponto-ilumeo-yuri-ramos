import { Application } from "express";
import { turnoCriarRouter } from "./criar/turnoCriar.router";



export function setRoutesTurno(baseUrlPath: string, expressApp: Application) {
    expressApp.use(baseUrlPath, turnoCriarRouter())
}
