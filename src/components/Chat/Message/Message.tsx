import { Box, Text } from '@chakra-ui/react';
import React from 'react'

interface MessageProps {
    username: string,
    message: string
}

const Message: React.FC<MessageProps> = (props) => {
  return (
    <Box textAlign={props.username === "user" ? "right" : "left"} marginRight={props.username === "user" ? "1rem" : ""}>
      <Text marginLeft="0.25rem">{props.username}</Text>
      <Box className="inline-block bg-slate-100 rounded-3xl px-4 py-2 mb-4 max-w-lg">
        <Text className="text-slate-950">{props.message}</Text>
      </Box>
    </Box>
  );
};

export default Message