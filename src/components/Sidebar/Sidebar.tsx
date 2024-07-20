import React, { useEffect, useState } from "react";
import NewChatButton from "../Button/NewChatButton";
import {
  Divider,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import LogoutButton from "../Button/LogoutButton";
import RoomList from "./RoomList/RoomList";
import UserInfo from "./UserInfo/UserInfo";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import LoginButton from "../Button/LoginButton";

const handleLogout = () => {
  auth.signOut();
};

const Sidebar = () => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // クリーンアップ関数
    return () => unsubscribe();
  }, []);
  
  return (
    <VStack
      h="100%"
      borderRight="1px solid #e2e8f0"
      width="20%"
      overflowY="auto"
      background="#f8fafc"
    >
      <NewChatButton />
      <Divider orientation="horizontal" borderColor="teal.600"/>
      <RoomList />
      <Spacer />
      {user && <UserInfo user={user} />}
      {user ? <LogoutButton handleLogout={handleLogout} /> : <LoginButton />}
    </VStack>
  );
};

export default Sidebar;
