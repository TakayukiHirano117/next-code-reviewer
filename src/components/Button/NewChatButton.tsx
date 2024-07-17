import React from "react";

import { Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const NewChatButton = () => {
  return (
    <Box>
      <Button
        m={4}
        colorScheme="teal"
        size={{sm: "sm", md: "md", lg: "lg"}}
        variant="outline"
        leftIcon={<AddIcon />}
      >
        New Chat
      </Button>
    </Box>
  );
};

export default NewChatButton;
