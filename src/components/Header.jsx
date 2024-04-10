import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "/keyword-generator.svg";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading color="yellow.300" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste your text below to obtain your keywords.
      </Text>
    </>
  )
}

export default Header;