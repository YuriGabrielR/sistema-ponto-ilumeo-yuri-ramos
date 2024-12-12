import { Request, Response, Router } from "express";
import { TurnoCriarService } from "./turnoCriar.service";
import { rotasApi } from "../../../configurações/rotasApi";
import { TurnoCriarController } from "./turnoCriar.controller";

export function turnoCriarRouter(): Router {
  const router = Router();

  const service = new TurnoCriarService();
  const controller = new TurnoCriarController(service);

  router.post(rotasApi.turnoCriar, async (req: Request, res: Response) => {
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
