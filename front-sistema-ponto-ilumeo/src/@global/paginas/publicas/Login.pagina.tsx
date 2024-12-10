import { Box, Button, Container, Flex, Image, Input, Text } from "@chakra-ui/react"
import { coresUi } from "../../../themes/coresUi"

export const LoginPagina = () => {
  return (
        <Container w={"100vw"} h={"100vh"} bg={coresUi.neutra} display={"flex"}>
          <Box display={"flex"} justifyContent={'center'} alignItems={'center'} w={"50%"} h={"100vh"} background={coresUi.neutra}>
            <Flex direction={"column"}  w="90%" height={"200px"}>
              <Box>
              <Flex fontSize={"40px"} gap={"10px"} >
                <Text fontWeight={"600"} color={coresUi.primaria}> Ponto </Text>
                <Text fontWeight={"700"} color={coresUi.secundaria}> Ilumeo </Text>
              </Flex>
              <Flex direction="column" gap={"18px"}>
              <Input placeholder="Código do funcionário:" />
              <Button bg={coresUi.secundaria}>
                <Text textTransform={"uppercase"} fontWeight={"600"} fontSize={"18px"} color={coresUi.neutra}>Confirmar</Text>
              </Button>
              </Flex>
              </Box>
            
              
            </Flex>
          </Box>

          <Flex justifyContent={'center'} alignItems={'center'} w={"50%"} h={"100vh"} background={coresUi.primaria}>
            <Image src="/imagem-home.png" w="500px" h="590px" />
          </Flex>
        </Container>
  )
}
