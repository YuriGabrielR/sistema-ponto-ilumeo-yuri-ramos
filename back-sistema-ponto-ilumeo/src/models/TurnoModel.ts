export interface ITurnoModelAtributos {
    id?: number
    funcionarioId: number;
    inicioTurno?: Date;
    fimTurno?: Date;
  }
  
  type DTO = Partial<ITurnoModelAtributos>;
  
  export class TurnoModelDTO implements DTO {
    id?: number
    funcionarioId?: number;
    inicioTurno?: Date;
    fimTurno?: Date;
  
    constructor(data: DTO) {
      if (data) {
        this.id = data.id;
        this.funcionarioId = data.funcionarioId;
        this.inicioTurno = data.inicioTurno;
        this.fimTurno = data.fimTurno
 
      }
    }
  }
  