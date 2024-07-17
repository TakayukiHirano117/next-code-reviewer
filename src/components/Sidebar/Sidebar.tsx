import React from "react";
import NewChatButton from "../Button/NewChatButton";
import {
  Divider,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import LogoutButton from "../Button/LogoutButton";
import RoomList from "./RoomList/RoomList";

const Sidebar = () => {
  return (
    <VStack
      h="100%"
      borderRight="1px solid #e2e8f0"
      width="20%"
      overflowY="auto"
      background="#f8fafc"
    >
      <NewChatButton />
      <Divider orientation="horizontal" />
      <RoomList />
      <Spacer />
      <LogoutButton />
    </VStack>
  );
};

export default Sidebar;
