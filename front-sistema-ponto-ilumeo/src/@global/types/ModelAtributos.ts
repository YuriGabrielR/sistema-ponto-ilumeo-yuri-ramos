export interface IFuncionarioModelAtributos {
    codigo: string;
    nome: string;
    criadoEm: Date;
    atualizadoEm: Date;
    turnos: ITurnoModelAtributos[]
  }

export interface FuncionarioModelDTO extends Partial<IFuncionarioModelAtributos>{
    id: number
}

  export interface ITurnoModelAtributos {
    id?: number
    funcionarioId: number;
    inicioTurno?: Date;
    fimTurno?: Date;
  }

  export interface TurnoModelDTO extends Partial<ITurnoModelAtributos>{
    id: number
}