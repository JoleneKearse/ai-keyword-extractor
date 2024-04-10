import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box bgGradient="linear(to-r, cyan.500, purple.600)" color="purple.50" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput />
        <Footer />
      </Container>
    </Box>
  )
}

export default App;