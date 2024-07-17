import { Box, Button } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import React from "react";

const LogoutButton = () => {
  return (
    <Box>
      <Button
        m={4}
        p={2}
        colorScheme="teal"
        size={{ sm: "sm", md: "md", lg: "lg" }}
        variant="outline"
        leftIcon={<FiLogOut />}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default LogoutButton;
