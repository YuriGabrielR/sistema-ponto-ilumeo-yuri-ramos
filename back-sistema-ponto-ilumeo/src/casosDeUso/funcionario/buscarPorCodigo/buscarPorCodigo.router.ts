import { Request, Response, Router } from 'express'
import { FuncionarioBuscarPorCodigoController } from './buscarPorCodigo.controller'
import { FuncionarioBuscarPorCodigoService } from './buscarPorCodigo.service'
import { rotasApi } from '../../../configurações/rotasApi'

export function funcionarioBuscarPorCodigoRouter(): Router {
  const router = Router()

  const controller = new FuncionarioBuscarPorCodigoController(new FuncionarioBuscarPorCodigoService())

  router.get(rotasApi.funcionario, (req: Request, res: Response) => {
    controller.execute(req, res).catch((error) => {
      res.status(500).json({ message: 'Erro no servidor', error: error.message })
    })
  })

  return router
}
