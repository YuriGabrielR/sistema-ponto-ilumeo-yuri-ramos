import { prisma } from "@/configurações/databases/mysql/iniciarConexãoMysql";
import { FuncionarioModelDTO, IFuncionarioModelAtributos } from "@/models/FuncionarioModel";

export class FuncionarioRepositorioMysql {
  async buscarPorCodigo({ codigoFuncionario }: IBuscarPorCodigo): Promise<FuncionarioModelDTO> {
    try {
      const result = await prisma.funcionario.findUnique({
        where: { codigo: codigoFuncionario },
        include: {
          turnos: true,
        },
      });

      
      if (!result) return undefined;
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
