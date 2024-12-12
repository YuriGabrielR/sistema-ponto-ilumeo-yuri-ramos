import { prisma } from "../configurações/databases/mysql/iniciarConexãoMysql";
import { FuncionarioModelDTO, IFuncionarioModelAtributos } from "../models/FuncionarioModel";
import { TurnoModelDTO } from "../models/TurnoModel";

export class FuncionarioRepositorioMysql {
  async buscarPorCodigo({ codigoFuncionario }: IBuscarPorCodigo): Promise<FuncionarioModelDTO| null> {
    try {
      const result = await prisma.funcionario.findUnique({
        where: { codigo: codigoFuncionario },
        include: {
          turnos: true,
        },
      });

      if (!result) return null;

      const turno = result.turnos ? result.turnos.map(turno => new TurnoModelDTO({
        id: turno.id, 
        funcionarioId: turno.funcionarioId as number,
        inicioTurno: turno.inicioTurno|| undefined,
        fimTurno: turno.fimTurno || undefined,
      })) : [];

      return new FuncionarioModelDTO({
        id: result.id, 
        codigo: result.codigo,
        nome: result.nome,
        criadoEm: result.criadoEm, 
        atualizadoEm: result.atualizadoEm,
        turnos: turno,
      });
    } catch (erro) {
      console.log("PerfilRepositorioMysql buscarPorId");
      console.log(erro);
      throw erro;
    }
  }
}

interface IBuscarPorCodigo {
    codigoFuncionario: IFuncionarioModelAtributos["codigo"];
}
