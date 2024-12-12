import { ITurnoModelAtributos, TurnoModelDTO } from "../../../models/TurnoModel"
import { TurnoRepositorioMysql } from "../../../repositorio/Turno.repositorioMysql"

export class TurnoCriarService {
  constructor(private readonly repositorio = new TurnoRepositorioMysql()) {}

  async execute(data: TurnoModelDTO): Promise<TurnoModelDTO> {
    try {

        const inicioTurnoFormatISO = data.inicioTurno ? new Date(data.inicioTurno) : undefined;
      
      const model = new TurnoModelDTO({
        funcionarioId: data.funcionarioId, 
        inicioTurno: inicioTurnoFormatISO, 
        fimTurno: undefined
      })
    
      await this.repositorio.criarTurno(model)
      return model

    } catch (erro) {
      console.log('TurnoCriarService')
      console.log(erro)
      throw erro
    }
  }
}
