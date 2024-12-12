import { Box, Button, Container, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Sidebar } from "../../../componentes/Sidebar";
import { coresUi } from "../../../../themes/coresUi";
import useHoraAtual from "../../../../utilitarios/useHoraAtual";
import React from "react";
import { MenuMobile } from "../../../componentes/MenuMobile";
import { useFuncionarioBuscarPorCodigo } from "../../../hooks/API/funcionario/useFuncionarioBuscarPorCodigo";
import { useParams } from "react-router-dom";
import { formatDate, formatTime } from "../../../../utilitarios/formatData";

export const Funcionario = () => {
  const horaAtual = useHoraAtual();

  const {codigoFuncionario} = useParams()


  const {data} = useFuncionarioBuscarPorCodigo({codigoFuncionario: codigoFuncionario || ''})

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
          Olá,&nbsp;{data?.nome}&nbsp;
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
                <Text fontWeight={"400"}> Código do usuário: <strong>{data?.codigo} </strong></Text>
                <Text fontWeight={"600"}> User: {data?.nome}</Text>
                <Text fontWeight={"600"}> Agora são:&nbsp; {horaAtual} </Text>
            </Flex>

            <Flex>
            </Flex>
          </Box>
          <Button bg={coresUi.backgroundMain} fontWeight={"700"}>
            Iniciar turno
          </Button>

          <Box display="flex" flexDir={"column"} w="100%" height={'450px'} alignItems={'center'} gap={'5px'} overflowY="auto">
          {data === undefined ? (
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

              {data.turnos.map((item, index) => (
                <React.Fragment key={index}>
                  <Text textAlign="center">{formatDate(item.inicioTurno)}</Text>
                  <Text textAlign="center">{formatTime(item.inicioTurno)}</Text>
                  <Text textAlign="center">{formatTime(item.fimTurno)}</Text>
                  <Text textAlign="center">7h30min</Text>
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
