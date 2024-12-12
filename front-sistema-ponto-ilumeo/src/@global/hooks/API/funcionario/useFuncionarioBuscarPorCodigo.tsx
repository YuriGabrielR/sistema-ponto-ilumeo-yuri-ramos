import { useQuery } from "@tanstack/react-query";
import { api } from "../../../api/api";
import { IFuncionarioModelAtributos } from "../../../types/ModelAtributos";
import { rotasApiFuncionario } from "../../../api/rotasApi/rotasApiFuncionario";

export const useFuncionarioBuscarPorCodigo = (params?: ServiceAtributos) => {
  const { data, refetch } = useQuery({
    queryKey: ['funcionario-buscar-codigo', JSON.stringify(params)],
    queryFn: async () => await endPoint(params),
    enabled: !!params?.codigoFuncionario,
  });

  return { data, refetch };
}

async function endPoint(params?: ServiceAtributos): Promise<IFuncionarioModelAtributos> {
  const { data } = await api().get(rotasApiFuncionario.perfilBuscarPorCodigo(params!.codigoFuncionario));
  return data.data;
}

interface ServiceAtributos {
  codigoFuncionario: string;
}
