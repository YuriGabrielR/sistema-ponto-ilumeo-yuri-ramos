import { ErrosCustomizados } from "@/erros/ErrosCustomizados"
import { FuncionarioModelDTO, IFuncionarioModelAtributos } from "@/models/FuncionarioModel"
import { FuncionarioRepositorioMysql } from "@/repositorio/Funcionario.repositorioMysql"


export class FuncionarioBuscarPorCodigoService {
  constructor(private readonly repositório = new FuncionarioRepositorioMysql()) {}

  async execute(data: ServiceAtributos): ServiceResponse {
    try {
      const { codigoFuncionario } = data

      if (!codigoFuncionario) throw new ErrosCustomizados('Atributo Ausente')

      const funcionario = await this.repositório.buscarPorCodigo({ codigoFuncionario })

      if (!funcionario) throw new ErrosCustomizados('Funcionário não encontrado')

      return funcionario
    } catch (err) {
      console.log('buscarPorCodigoService')
      throw err
    }
  }
}

type ServiceResponse = Promise<FuncionarioModelDTO>
interface ServiceAtributos {
  codigoFuncionario: IFuncionarioModelAtributos['codigo']
}
