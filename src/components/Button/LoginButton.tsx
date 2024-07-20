import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const LoginButton = () => {
  const router = useRouter();

  const navigateLoginPage = () => {
    router.push('/auth/login')
  }
  return (
    <Box>
      <Button
        m={4}
        p={2}
        colorScheme="teal"
        size={{ sm: "sm", md: "md", lg: "lg" }}
        variant="outline"
        leftIcon={<FiLogOut />}
        onClick={navigateLoginPage}
      >
        Log in
      </Button>
    </Box>
  );
};

export default LoginButton;
