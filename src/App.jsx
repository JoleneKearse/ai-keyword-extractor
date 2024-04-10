import { Container, Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box bgGradient="linear(to-r, cyan.500, purple.600)" color="purple.50" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <h1>My App</h1>
      </Container>
    </Box>
  )
}

export default App