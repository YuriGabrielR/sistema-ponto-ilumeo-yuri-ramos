import { ErrosCustomizados } from "@/erros/ErrosCustomizados"
import { DateBR } from "@/utilitarios/DateBR"
import { Uuid } from "@/utilitarios/Uuid"


export interface IAbstractModelAtributos {
  id?: string
  criadoEm?: Date
  atualizadoEm?: Date
}

export abstract class AbstractModel {
  protected id: string
  criadoEm: Date
  atualizadoEm: Date
  protected date: Date = DateBR.set(new Date())

  constructor(abstractModelAtributos: IAbstractModelAtributos) {
    abstractModelAtributos.id ? this.setId(abstractModelAtributos.id) : this.setId(this.getNewId())
    this.criadoEm = abstractModelAtributos.criadoEm ?? this.date
    this.atualizadoEm = abstractModelAtributos.atualizadoEm ?? this.date
    delete this.date
  }

  private getNewId() {
    return Uuid.gerar()
  }

  public getId() {
    return this.id
  }

  public setId(id: string) {
    if (!Uuid.validar(id)) {
      throw new ErrosCustomizados('idInválido')
    }

    this.id = id
  }
}
