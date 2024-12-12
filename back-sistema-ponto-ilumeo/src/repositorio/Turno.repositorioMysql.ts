import { prisma } from "../configurações/databases/mysql/iniciarConexãoMysql";
import { TurnoModelDTO } from "../models/TurnoModel";

export class TurnoRepositorioMysql {
    async criarTurno(dataModel: TurnoModelDTO): Promise<TurnoModelDTO> {
        try {
            console.log("funcionarioId:", dataModel.funcionarioId);  
          await prisma.turno.create({
            data:{
                funcionarioId: dataModel.funcionarioId as number,
                inicioTurno: dataModel.inicioTurno,
                fimTurno: dataModel.fimTurno,
            }
          })
    
          return dataModel
        } catch (erro) {
          console.log('TurnoRepositorioMySql criarTurno')
          throw erro
        }
      }

      async buscarTurnoPorId(turnoId: number): Promise<TurnoModelDTO | null>{
        const result = await prisma.turno.findUnique({
          where: { id: turnoId }  
        });

        return new TurnoModelDTO({
          id: result?.id, 
          inicioTurno: result?.inicioTurno || undefined,
          fimTurno: result?.fimTurno || undefined,
          funcionarioId: result?.funcionarioId,
        });
      }

      async finalizarTurno(data: { turnoId: number, fimTurno: Date }): Promise<TurnoModelDTO> {
        const { turnoId, fimTurno } = data;
      
        const turnoAtualizado = await prisma.turno.update({
          where: { id: turnoId },  
          data: { fimTurno }
        });
      
        return new TurnoModelDTO({
          id: turnoAtualizado.id,
          inicioTurno: turnoAtualizado.inicioTurno || undefined,
          fimTurno: turnoAtualizado.fimTurno || undefined,
          funcionarioId: turnoAtualizado.funcionarioId,
        });
      }
}
