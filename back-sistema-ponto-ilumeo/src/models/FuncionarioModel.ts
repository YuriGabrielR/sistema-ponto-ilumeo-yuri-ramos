import { TurnoModelDTO } from "./TurnoModel";

export interface IFuncionarioModelAtributos {
  id?: number
  codigo: string;
  nome: string;
  criadoEm: Date;
  atualizadoEm: Date;
  turnos: TurnoModelDTO[]
}

type DTO = Partial<IFuncionarioModelAtributos>;

export class FuncionarioModelDTO implements DTO {
  id?: number;
  codigo?: string;
  nome?: string;
  criadoEm?: Date;
  atualizadoEm?: Date;
  turnos: TurnoModelDTO[] | undefined


  constructor(data: DTO) {
    if (data) {
      this.codigo = data.codigo;
      this.nome = data.nome;
      this.criadoEm = data.criadoEm;
      this.atualizadoEm = data.atualizadoEm;
      this.turnos = data.turnos

    }
  }
}
