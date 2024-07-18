"use client";

import NewChatButton from "@/components/Button/NewChatButton";
import Chat from "@/components/Chat/Chat";
import SubmitReview from "@/components/Form/SubmitReview";
import Sidebar from "@/components/Sidebar/Sidebar";
import openai from "@/lib/openai";
import { Box, Divider, HStack } from "@chakra-ui/react";

const content = 'hello'

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

export default function Home() {
  
    const res = callOpenAI();
    console.log(res)

  return (
    <HStack h="100vh">
      <Sidebar />
      <Chat />
    </HStack>
  );
}
