import { Request, Response, Router } from "express";
import { rotasApi } from "../../../configurações/rotasApi";
import { TurnoFinalizarService } from "./turnoFinalizar.service";
import { TurnoFinalizarController } from "./turnoFinalizar.controller";

export function turnoFinalizar(): Router {
  const router = Router();

  const service = new TurnoFinalizarService();
  const controller = new TurnoFinalizarController(service);

  router.post(rotasApi.turnoFinalizar, async (req: Request, res: Response) => {
    try {
      await controller.execute(req, res);
    } catch (error: any) {
      res.status(500).json({
        message: "Erro no servidor",
        error: error.message || "Erro desconhecido",
      });
    }
  });

  return router;
}
