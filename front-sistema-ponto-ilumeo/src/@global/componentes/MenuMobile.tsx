import { Container, Text, Flex, Box } from "@chakra-ui/react"
import { coresUi } from "../../themes/coresUi"
import { List } from "@phosphor-icons/react"
import { Nav } from "./Nav"
import { useState } from "react"

export const MenuMobile = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prev) => !prev)


  return (
    <Container display={'flex'} w={'100vw'} bg={coresUi.backgroundMain} height={isOpen ? '25%' : '60px'} overflow="hidden" transition="height 0.3s ease-in-out" 
    padding={'10px'} zIndex={99} pos={'absolute'} left={0} top={0} flexDirection={'column'}>
        <Flex justifyContent={'space-around'} padding={'10px'}>
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

      <Flex>
      <List size={32} color="white" cursor={'pointer'} onClick={toggleMenu} />
      </Flex>

        </Flex>

      <Box color={'white'} w="100">
      <Nav/>
      </Box>  
    </Container>
  )
}
