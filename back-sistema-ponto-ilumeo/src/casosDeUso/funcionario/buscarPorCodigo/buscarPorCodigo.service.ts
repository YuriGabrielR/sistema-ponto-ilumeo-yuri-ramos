import { ErrosCustomizados } from "../../../erros/ErrosCustomizados"
import { IFuncionarioModelAtributos } from "../../../models/FuncionarioModel"
import { FuncionarioRepositorioMysql } from "../../../repositorio/Funcionario.repositorioMysql"


export class FuncionarioBuscarPorCodigoService {
  constructor(private readonly repositorio = new FuncionarioRepositorioMysql()) {}

  async execute(data: ServiceAtributos): ServiceResponse {
    try {
      const { codigoFuncionario } = data
      console.log(codigoFuncionario)

      if (!codigoFuncionario) throw new ErrosCustomizados('Atributo Ausente')

      const funcionario = await this.repositorio.buscarPorCodigo({ codigoFuncionario })
      console.log(funcionario)
      if (!funcionario) throw new ErrosCustomizados('Funcionário não encontrado')

      return funcionario
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

type ServiceResponse = Promise<Partial<IFuncionarioModelAtributos>>
interface ServiceAtributos {
  codigoFuncionario: IFuncionarioModelAtributos['codigo']
}
