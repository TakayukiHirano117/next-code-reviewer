"use client";

import NewChatButton from "@/components/Button/NewChatButton";
import Chat from "@/components/Chat/Chat";
import SubmitReview from "@/components/Form/SubmitReview";
import Sidebar from "@/components/Sidebar/Sidebar";
import openai from "@/lib/openai";
import { Box, Divider, HStack } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";

const content: string = "こんにちは";

const callOpenAI = async () => {
  const messages = [
    {
      role: "user",
      content: content,
    },
  ];

  const result = await openai.completion(messages);
  return result;
};

// export const SampleContext = createContext();

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [result, setResult] = useState<Promise<AxiosResponse> | undefined>();

  // const [isLoading, setIsLoading] = useState(false);

  const func = async () => {
    setMessage(content);
    const res = await callOpenAI();
    setResult(res);
  };

  useEffect(() => {
    func();
  }, []);

  return (
    <HStack h="100vh">
      <Sidebar />
      <Chat message={message} result={result} />
    </HStack>
  );
}
