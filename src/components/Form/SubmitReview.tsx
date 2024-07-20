import openai from "@/lib/openai";
import { HStack, IconButton, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowUp } from "react-icons/go";

const SubmitReview: React.FC = ({ handleUserMessage, createMessage }) => {
  // const chatRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const chat = chatRef.current;
  //   if(chat) {
  //     const message = document.createElement('Box')
  //     message.textContent = 'message';
  //     chat.appendChild(message);
  //   }
  // }, [])

  const [inputMessage, setInputMessage] = useState<string>("");

  const handleInputChange = () => {
    handleUserMessage(inputMessage);
  };

  const callOpenAI = async (userMessage: string) => {
    const messages = [
      {
        role: "user",
        content: userMessage,
      },
    ];

    const result = await openai.completion(messages);
    createMessage(result, "AI");

    console.log(result);

    return result;
  };

  return (
    <form className="flex-shrink-0 relative flex items-center justify-center">
      <HStack width="80%">
        <Input
          focusBorderColor="teal.500"
          placeholder="New Chat ..... "
          _placeholder={{ opacity: "0.3", color: "gray.500" }}
          size="lg"
          width="80%"
          p={3}
          boxShadow="base"
          borderRadius="32px"
          bgColor="white"
          variant="flushed"
          value={inputMessage}
          onChange={(e) => {
            console.log(e.target.value);
            setInputMessage(e.target.value);
            handleInputChange;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // userのメッセージを描画するのと、api叩く処理
              createMessage(inputMessage, "user");
              callOpenAI(inputMessage);
              setInputMessage("");
            }
          }}
          //   value={enteredTodo}
          //   onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <IconButton
          aria-label=""
          icon={<GoArrowUp />}
          isRound
          colorScheme="teal"
          size="md"
          bgColor="white"
          variant="outline"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            // createMessage(inputMessage, "user");
            // callOpenAI(inputMessage);
            // setInputMessage("");
          }}
        />
      </HStack>
    </form>
  );
};

export default SubmitReview;
