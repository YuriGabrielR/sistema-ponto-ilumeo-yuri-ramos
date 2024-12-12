import { Request, Response } from "express"
import { handleControllerResponse } from "../../../utilitarios/handleControllerResponse"
import { TurnoFinalizarService } from "./turnoFinalizar.service"

export class TurnoFinalizarController {
  constructor(private readonly service: TurnoFinalizarService) {}
  async execute(request: Request, response: Response) {
    
    try {
      const responseService = await this.service.execute({
        id: Number(request.body.funcionarioId),  
        fimTurno: request.body.fimTurno || undefined
      })

      const controllerResponse = handleControllerResponse(responseService)
      return response.status(controllerResponse.status).json(controllerResponse.response)
    } catch (erro) {
      const controllerResponse = handleControllerResponse(erro)
      return response.status(controllerResponse.status).json(controllerResponse.response)
    }
  }
}
