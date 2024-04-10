import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");
  const toast = useToast();
  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field cannot be empty",
        description: "Please enter some text to extract keywords",
        status: "error",
        duration: 5000,
        isClosable: false,
      })
    } else {
      extractKeywords(text);
    }
  }

  return (
    <>
      <Textarea
        bg="purple.800"
        color="purple.100"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="cyan.500"
        color="purple.50"
        marginTop={4}
        width="100%"
        _hover={{ bg: "cyan.600" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  )
}

export default TextInput;