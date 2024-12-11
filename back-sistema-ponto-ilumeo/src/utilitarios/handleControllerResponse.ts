export function handleControllerResponse(response: unknown | Error): IResponseType {
  if (response instanceof Error) {
    let message = ''
    switch (true) {
      default:
        return { status: 500, response: { error: 'Ocorreu algum problema' } }
    }
  }

  return { status: 200, response: { data: response } }
}

interface IResponseType {
  response: IResponseSuccess | IResponseError
  status: number
}
export type IResponseSuccess = {
  data: unknown
}
interface IResponseError {
  error: string
}

