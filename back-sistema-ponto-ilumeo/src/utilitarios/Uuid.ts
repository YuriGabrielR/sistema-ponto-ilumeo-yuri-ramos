/* c8 ignore start */
import { v4, validate } from 'uuid'

export const Uuid = {
  gerar() {
    return v4()
  },

  validar(uuid: string): boolean {
    return validate(uuid)
  },
}
