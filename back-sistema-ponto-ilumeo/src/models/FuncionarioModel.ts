import Yup, { validarSchema } from "@/utilitarios/Yup"
import { AbstractModel, IAbstractModelAtributos } from "./AbstractModel"


export interface IFuncionarioModelAtributos extends IAbstractModelAtributos {
  codigo: string
  nome:string

}

export class FuncionarioModel extends AbstractModel {
    codigo: string
    nome:string

  constructor(modelAtributos: IFuncionarioModelAtributos) {
    super(modelAtributos)
    Object.assign(this, modelAtributos)
    validarSchema(validacao, this)
  }
}

const validacao = Yup.object({
  nome: Yup.string().required().label('Nome'),
  codigo: Yup.string().required().label('codigo'),
})

type DTO = Partial<IFuncionarioModelAtributos>
export class FuncionarioModelDTO implements DTO {
  id: string
  criadoEm?: Date
  atualizadoEm?: Date

  nome:string
  codigo: string



  constructor(modelAtributos: DTO) {
    Object.assign(this, modelAtributos)
  }
}
