import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { coresUi } from "../../../themes/coresUi";
import { useForm } from "react-hook-form";
import { useFuncionarioBuscarPorCodigo } from "../../hooks/API/funcionario/useFuncionarioBuscarPorCodigo";
import { useNavigate } from "react-router-dom";
import { rotasApp } from "../../../rotas/rotasApp";
import { useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type InputLogin = {
  codigo_funcionario: string;
};

export const LoginPagina = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<InputLogin>();
  const navigate = useNavigate();
  const [codigoFuncionario, setCodigoFuncionario] = useState<string | null>(
    null
  );

  const { refetch } = useFuncionarioBuscarPorCodigo(
    codigoFuncionario ? { codigoFuncionario } : undefined
  );

  useEffect(() => {
    if (!codigoFuncionario) return;

    refetch()
      .then(({ data }) => {
        if (data) {
          toast.success("Funcionário encontrado, você será redirecionado!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setTimeout(
            () => navigate(rotasApp.funcionarioPage(data.codigo)),
            2000
          );
        } else {
          toast.error(
            "Funcionário não encontrado, verifique se o código do mesmo está correto!",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            }
          );
        }
      })
      .catch(() => {
        toast.error("Erro interno de servidor", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  }, [codigoFuncionario, refetch, navigate]);

  const onSubmit = (formData: InputLogin) => {
    setCodigoFuncionario(formData.codigo_funcionario);
  };

  return (
    <>
      <Container
        w="100vw"
        h="100vh"
        bg={coresUi.neutra}
        display="flex"
        justifyContent={{ base: "center", lg: "none" }}
        position={"relative"}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={{ base: "100%", lg: "50%" }}
          h="100vh"
          background={coresUi.neutra}
        >
          <Flex direction="column" w="90%" height="200px">
            <Box>
              <Flex fontSize="40px" gap="10px">
                <Text fontWeight="600" color={coresUi.primaria}>
                  Ponto
                </Text>
                <Text fontWeight="700" color={coresUi.secundaria}>
                  Ilumeo
                </Text>
              </Flex>

              <Flex direction="column" gap="18px">
                <form
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexDirection: "column",
                  }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Input
                    {...register("codigo_funcionario", {
                      required: "Código do funcionário é obrigatório",
                    })}
                    placeholder="Código do funcionário:"
                    focusRingColor={coresUi.secundaria}
                    padding="15px"
                    color={coresUi.primaria}
                    fontWeight="700"
                  />
                  {errors.codigo_funcionario && (
                    <Text fontSize="12px" color="red">
                      Código do funcionário é obrigatório
                    </Text>
                  )}

                  <Button bg={coresUi.secundaria} type="submit">
                    <Text
                      textTransform="uppercase"
                      fontWeight="600"
                      fontSize="18px"
                      color={coresUi.neutra}
                    >
                      Confirmar
                    </Text>
                  </Button>
                </form>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Flex
          display={{ base: "none", lg: "flex" }}
          justifyContent="center"
          alignItems="center"
          w="50%"
          h="100vh"
          background={coresUi.backgroundMain}
        >
          <Image src="/imagem-home.png" w="500px" h="590px" />
        </Flex>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};
