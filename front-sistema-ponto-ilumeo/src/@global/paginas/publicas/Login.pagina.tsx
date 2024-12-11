import { Box, Button, Container, Flex, Image, Input, Text } from "@chakra-ui/react"
import { coresUi } from "../../../themes/coresUi"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { rotasApp } from "../../../rotas/rotasApp";


type InputLogin = {
  codigo_funcionario: string
}


export const LoginPagina = () => {

  const navigate = useNavigate()

    const { register, watch, getValues } = useForm<InputLogin>();

    console.log(watch("codigo_funcionario"))

  return (
        <Container w={"100vw"} h={"100vh"} bg={coresUi.neutra} display={"flex"} justifyContent={{base:"center", lg:"none"}}>

          <Box display={"flex"} justifyContent={'center'} alignItems={'center'} w={{base:"100%", lg:"50%"}} h={"100vh"} background={coresUi.neutra}>

            <Flex direction={"column"}  w="90%" height={"200px"}>

              <Box>
              <Flex fontSize={"40px"} gap={"10px"} >
                <Text fontWeight={"600"} color={coresUi.primaria}> Ponto </Text>
                <Text fontWeight={"700"} color={coresUi.secundaria}> Ilumeo </Text>
              </Flex>

              <Flex direction="column" gap={"18px"}>
                <Input {...register("codigo_funcionario")}  placeholder="Código do funcionário:" focusRingColor={coresUi.secundaria} padding={"15px"} color={coresUi.primaria} fontWeight={"700"}/>

                <Button bg={coresUi.secundaria} onClick={()=> navigate(rotasApp.funcionarioPage(getValues("codigo_funcionario")))}>
                  
                  <Text textTransform={"uppercase"} fontWeight={"600"} fontSize={"18px"} color={coresUi.neutra}>Confirmar</Text>
                </Button>


              </Flex>

              </Box>
          
            </Flex>
          </Box>

          <Flex display={{base:"none", lg:"flex"}} justifyContent={'center'} alignItems={'center'} w={"50%"} h={"100vh"} background={coresUi.backgroundMain}>
            <Image src="/imagem-home.png" w="500px" h="590px" />
          </Flex>
        </Container>
  )
}
