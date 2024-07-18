"use client";

import NewChatButton from "@/components/Button/NewChatButton";
import Chat from "@/components/Chat/Chat";
import SubmitReview from "@/components/Form/SubmitReview";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Box, Divider, HStack } from "@chakra-ui/react";


export default function Home() {
  return (
    <HStack h="100vh">
      <Sidebar />
      <Chat />
    </HStack>
  );
}
