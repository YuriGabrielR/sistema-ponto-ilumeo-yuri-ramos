import { Flex, Text } from "@chakra-ui/react";
import { rotasApp } from "../../rotas/rotasApp";
import { ClockUser, User } from "@phosphor-icons/react";


export const Nav = () => {

    const isAtivo = (rota: string) => {
        const regexPath = /^\/[^/]+/
        const isMatch = location.pathname.match(regexPath)?.[0] === rota.match(regexPath)?.[0]
        return isMatch
      }

    const itensMenu = [
        {
            icone: ClockUser,
            texto:'Registros de ponto',
            ativo: isAtivo('/funcionario'),
            linkTo: rotasApp.inicio
        },

        {
            icone: User,
            texto:'Meus dados',
            ativo: isAtivo('/perfil'),
            linkTo: rotasApp.inicio,
        },

    ]



    return (
      <Flex flexDir={'column'} gap={"1rem"}>
        
            <Flex display="flex" flexDirection={'column'} gap="8px" >
                {itensMenu.map((item, index)=>(
                    <Flex key={index} alignItems={'center'} gap={'10px'} bg={item.ativo ? '#a5a19c3d': 'transparent'} cursor={'pointer'} borderRadius={'5px'} h="40px" padding={'5px'}>
                    <item.icone size={30} />
                    <Text> {item.texto}</Text>
                    </Flex>
                ))}
            </Flex>

      </Flex>

    );
  };
  