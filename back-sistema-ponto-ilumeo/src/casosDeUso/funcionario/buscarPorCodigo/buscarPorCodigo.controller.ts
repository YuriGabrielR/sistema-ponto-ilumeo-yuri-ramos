import { handleControllerResponse } from '../../../utilitarios/handleControllerResponse'
import { FuncionarioBuscarPorCodigoService } from './buscarPorCodigo.service'

import { Request, Response } from 'express'

export class FuncionarioBuscarPorCodigoController {
  constructor(private readonly funcionarioBuscarPorId: FuncionarioBuscarPorCodigoService ) {}

  async execute(request: Request, response: Response) {
    try {
      const codigoFuncionario = request.params.codigo

      const responseService = await this.funcionarioBuscarPorId.execute({ codigoFuncionario })
      const controllerResponse = handleControllerResponse(responseService)

      return response.status(controllerResponse.status).json(controllerResponse.response)
    } catch (error) {
      const controllerResponse = handleControllerResponse(error)
      return response.status(controllerResponse.status).json(controllerResponse.response)
    }
  }
}
