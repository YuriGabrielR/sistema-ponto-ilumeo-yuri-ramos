import { prisma } from "../configurações/databases/mysql/iniciarConexãoMysql";
import { FuncionarioModelDTO, IFuncionarioModelAtributos } from "../models/FuncionarioModel";
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
}
