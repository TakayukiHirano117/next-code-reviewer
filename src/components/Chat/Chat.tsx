import { Box, Text} from "@chakra-ui/react";
import React from "react";
import SubmitReview from "../Form/SubmitReview";

const Chat = () => {
  return (
    <Box width="80%" height="100%">
      <Box display="flex" height="100%" p="2rem" flexDirection="column">
        <Box as="h1" fontSize="lg" fontWeight="semibold" marginBottom="1rem">
          Room 1
        </Box>
        <Box flexGrow="1" overflowY="auto" marginBottom="1rem"> {/* 要素を追加する場所 */}
          <Box textAlign="right">
            <Text marginRight="0.25rem">User</Text>
            <Box className="inline-block bg-slate-100 rounded-3xl px-4 py-2 mb-4 max-w-lg">
              <Text className="text-slate-950">userのメッセージ</Text>
            </Box>
          </Box>
          <Box textAlign="left">
            <Text marginLeft="0.25rem">AI</Text>
            <Box className="inline-block bg-slate-100 rounded-3xl px-4 py-2 mb-4 max-w-lg">
              <Text className="text-slate-950">AIの返信</Text>
            </Box>
          </Box>
          {/* <Box textAlign="left">
            <Text marginLeft="0.25rem">AI</Text>
            <Box className="inline-block bg-slate-100 rounded-3xl px-4 py-2 mb-4 max-w-lg">
              <Text className="text-slate-950">AIの返信</Text>
            </Box>
          </Box> */}
        </Box>
        <SubmitReview />
      </Box>
    </Box>
  );
};

export default Chat;
