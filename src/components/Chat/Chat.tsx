import { Box, Text } from "@chakra-ui/react";
import React, { createContext, useRef, useState } from "react";
import SubmitReview from "../Form/SubmitReview";
import { createRoot } from "react-dom/client";
import Message from "./Message/Message";
import { AxiosResponse } from "axios";
import openai from "@/lib/openai";

interface ChatProps {
  message: string;
  result: Promise<AxiosResponse> | undefined;
}

const Chat: React.FC<ChatProps> = ({ message, result }) => {
  // const divRef = useRef<HTMLDivElement>(undefined!);

  // const addChild = () => {
  //   // gpt apiのresを引数で受け取って、textContentに入れればいけそうじゃね？
  //   if (divRef.current) {
  //     const childWrapper = document.createElement("div");
  //     divRef.current.append(childWrapper);
  //     const root = createRoot(childWrapper);
  //     // root.render(<Message props={'user', } />);
  //   }
  // };

  // const SampleContext = createContext();

  const [userMessage, setUserMessage] = useState<string>("");
  const [botResponse, setBotResponse] = useState<string>("");

  const handleUserMessage = (message: string) => {
    setUserMessage(message);
  };

  const divRef = useRef<HTMLDivElement>(undefined!);

  const createMessage = (inputMessage: string, user: string) => {
    // gpt apiのresを引数で受け取って、textContentに入れればいけそうじゃね？
    if (divRef.current) {
      const childWrapper = document.createElement("div");
      divRef.current.append(childWrapper);
      const root = createRoot(childWrapper);
      root.render(<Message username={user} message={inputMessage} />);
    }
  };

  const callOpenAI = async (content: string) => {
    const messages = [
      {
        role: "user",
        content: content,
      },
    ];

    const result = await openai.completion(messages);
    return result;
  };

  return (
    <Box width="80%" height="100%">
      <Box display="flex" height="100%" p="2rem" flexDirection="column">
        <Box as="h1" fontSize="lg" fontWeight="semibold" marginBottom="1rem">
          Room 1
        </Box>
        <Box flexGrow="1" overflowY="auto" marginBottom="1rem" ref={divRef}>
          {/* <Box textAlign="right" marginRight="1rem">
            <Text marginRight="0.25rem">User</Text>
            <Box className="inline-block bg-slate-100 rounded-3xl px-4 py-2 mb-4 max-w-lg">
              <Text className="text-slate-950">{message}</Text>
            </Box>
          </Box>
          <Box textAlign="left">
            <Text marginLeft="0.25rem">AI</Text>
            <Box className="inline-block bg-slate-100 rounded-3xl px-4 py-2 mb-4 max-w-lg">
              <Text className="text-slate-950">{result}</Text>
            </Box>
          </Box> */}
          {/* <Box textAlign="left">
            <Text marginLeft="0.25rem">AI</Text>
            <Box className="inline-block bg-slate-100 rounded-3xl px-4 py-2 mb-4 max-w-lg">
              <Text className="text-slate-950">AIの返信</Text>
            </Box>
          </Box> */}
        </Box>
        {/* <SampleContext.Provider> */}
        <SubmitReview handleUserMessage={handleUserMessage} createMessage={createMessage} />
        {/* </SampleContext.Provider> */}
      </Box>
    </Box>
  );
};

export default Chat;
