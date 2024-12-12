import { TurnoModelDTO } from "../../../models/TurnoModel";
import { TurnoRepositorioMysql } from "../../../repositorio/Turno.repositorioMysql";

export class TurnoFinalizarService {
  constructor(private readonly repositorio = new TurnoRepositorioMysql()) {}

  async execute(data: TurnoModelDTO): Promise<TurnoModelDTO> {
    try {
      const { id: turnoId, fimTurno } = data; 

      const fimTurnoFormatISO = fimTurno ? new Date(fimTurno) : undefined;

      const turnoExistente = await this.repositorio.buscarTurnoPorId(Number(turnoId));

      if (!turnoExistente) {
        throw new Error("Turno não encontrado.");
      }

      const turnoAtualizado = await this.repositorio.finalizarTurno({
        turnoId: turnoId!,
        fimTurno: fimTurnoFormatISO!
      });

      return turnoAtualizado;  
    } catch (erro) {
      console.log('Erro ao finalizar o turno:', erro);
      throw erro;
    }
  }
}
