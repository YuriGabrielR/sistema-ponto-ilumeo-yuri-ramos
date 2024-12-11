import { Box, Flex, Text } from "@chakra-ui/react";
import { coresUi } from "../../themes/coresUi";
import { Nav } from "./Nav";
import { SignOut } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { rotasApp } from "../../rotas/rotasApp";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      w="260px"
      height={"100vh"}
      display={"flex"}
      flexDir={"column"}
      boxShadow={`0px 1px 2px ${coresUi.primaria}`}
      bg={coresUi.backgroundMain}
      padding={"25px"}
      position={"relative"}
    >
      <Flex
        fontSize={"25px"}
        gap={"10px"}
        width={"100%"}
        justifyContent={"left"}
      >
        <Text fontWeight={"700"} color={coresUi.neutra}>
          Ponto
        </Text>
        <Text fontWeight={"800"} color={coresUi.secundaria}>
          Ilumeo
        </Text>
      </Flex>

      <Box marginTop={"30px"} color={"white"}>
        <Nav />
      </Box>

      <Flex
        position={"absolute"}
        bottom={5}
        left={0}
        alignSelf={"flex-end"}
        height={"auto"}
        paddingLeft="25px"
        gap={"5px"}
        alignItems={"center"}
        cursor={"pointer"}
        onClick={() => navigate(rotasApp.inicio)}
      >
        <SignOut color={coresUi.neutra} size="25px" />
        <Text color={coresUi.neutra}>Sair</Text>
      </Flex>
    </Box>
  );
};
