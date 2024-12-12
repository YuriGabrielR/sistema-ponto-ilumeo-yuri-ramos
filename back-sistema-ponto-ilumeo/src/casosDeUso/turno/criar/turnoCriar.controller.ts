import { Request, Response } from "express"
import { handleControllerResponse } from "../../../utilitarios/handleControllerResponse"
import { TurnoCriarService } from "./turnoCriar.service"

export class TurnoCriarController {
  constructor(private readonly service: TurnoCriarService) {}
  async execute(request: Request, response: Response) {
    
    console.log(request.body.inicioTurno)
    try {
      const responseService = await this.service.execute({
        funcionarioId: Number(request.body.funcionarioId), 
        inicioTurno: request.body.inicioTurno || undefined, 
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
