import { Box, Button, Container, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Sidebar } from "../../../componentes/Sidebar";
import { coresUi } from "../../../../themes/coresUi";
import useHoraAtual from "../../../../utilitarios/useHoraAtual";
import React from "react";
import { MenuMobile } from "../../../componentes/MenuMobile";

export const Funcionario = () => {
  const horaAtual = useHoraAtual();

  const mock = [
    { data: '11/12/2023', horaInicial: '7h30min', horaFinal: '16h30min', total: '9h' },
    { data: '12/12/2023', horaInicial: '8h00min', horaFinal: '17h00min', total: '9h' },
    { data: '13/12/2023', horaInicial: '7h45min', horaFinal: '16h45min', total: '9h' },
    { data: '14/12/2023', horaInicial: '8h15min', horaFinal: '17h15min', total: '9h' },
    { data: '14/12/2023', horaInicial: '8h15min', horaFinal: '17h15min', total: '9h' },
    { data: '14/12/2023', horaInicial: '8h15min', horaFinal: '17h15min', total: '9h' },

  ];

  return (
    <Container display={"flex"} w="100%" h="auto" overflow={'hidden'} justifyContent={{base:"center", lg:"normal"}} position={'relative'}>
      <Flex display={{base:"none", lg:"flex"}}>
      <Sidebar />
      </Flex>

      <Box
        display="flex"
        flexDir={"column"}
        marginLeft={{base:"0px", lg:"35px"}}
        w="90%"
        h="100vh"
        gap={'30px'}
        justifyContent={{base:"center", lg:"normal"}}
      >
        
      <Flex display={{base:"flex", lg:"none"}}>
      <MenuMobile />
        
      </Flex>

        <Text fontSize={{base:"18px", md:"24px"}} fontWeight={"500"} display={"flex"} w={"100%"} marginTop={{base:'30px', md:'10px'}} flexDirection={{base:"column", md:"row"}}>
          
          <Text fontWeight={"700"} color={coresUi.secundaria}>
          Olá,&nbsp;Yuri!
          </Text>
          &nbsp;Seja bem-vindo(a) novamente!
        </Text>

        <Container
          display="flex"
          w="100%"
          flexDirection={"column"}
          gap={"10px"}
          justifyContent={"center"}
          paddingX={"10px"}
          
        >
          <Box
            display="flex"
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Flex w="100%" flexDir={'column'} fontSize={{base:"14px", md:"16px"}}>
                <Text fontWeight={"400"}> Código do usuário: <strong>432XDSASA </strong></Text>
                <Text fontWeight={"600"}> User: Yuri Ramos </Text>
                <Text fontWeight={"600"}> Agora são:&nbsp; {horaAtual} </Text>
            </Flex>

            <Flex>
            </Flex>
          </Box>
          <Button bg={coresUi.backgroundMain} fontWeight={"700"}>
            Iniciar turno
          </Button>

          <Box display="flex" flexDir={"column"} w="100%" height={'450px'} alignItems={'center'} gap={'5px'} overflowY="auto">
          {mock.length === 0 ? (
            <Flex w={'100%'} h="100%" justifyContent={'center'} alignItems={'center'}>
              <Image src="/semDados.svg" height={'250px'} />
            </Flex>
          ) : (
            <Grid
              templateColumns="1fr 1fr 1fr 1fr"
              gap={4}
              w="100%"
              borderTop="1px solid"
              borderColor={coresUi.neutra}
              paddingY="10px"
              fontSize={{base:"13px", md:"16px"}}
            >
              <Text fontWeight={"600"} textAlign="center">Data</Text>
              <Text fontWeight={"600"} textAlign="center">Início</Text>
              <Text fontWeight={"600"} textAlign="center">Fim</Text>
              <Text fontWeight={"600"} textAlign="center">Total</Text>

              {mock.map((item, index) => (
                <React.Fragment key={index}>
                  <Text textAlign="center">{item.data}</Text>
                  <Text textAlign="center">{item.horaInicial}</Text>
                  <Text textAlign="center">{item.horaFinal}</Text>
                  <Text textAlign="center">{item.total}</Text>
                </React.Fragment>
              ))}
            </Grid>
          )}
        </Box>
        </Container>

        
      </Box>
    </Container>
  );
};
