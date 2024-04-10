import { useState } from "react";

import { Container, Box } from "@chakra-ui/react";

import Header from "./components/Header";
import TextInput from "./components/TextInput";
import Footer from "./components/Footer";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Extract keywords from this text. Make the first letter of each word capitalized and separate with commas.\n\n" + text + "",
          }
        ],
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      })
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);

    const json = await response.json();

    const data = json.choices[0].message.content;

    console.log(data);
    setKeywords(data);
    setLoading(false);
  };

  return (
    <Box bgGradient="linear(to-r, cyan.500, purple.600)" color="purple.50" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  )
}

export default App;