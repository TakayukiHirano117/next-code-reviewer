import { HStack, IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { GoArrowUp } from "react-icons/go";

const SubmitReview = () => {
  return (
    <form className="flex-shrink-0 relative flex items-center justify-center ">
      <HStack width="80%">
        <Input
          focusBorderColor="teal.500"
          placeholder="New Chat ..... "
          _placeholder={{ opacity: "0.3", color: "gray.500" }}
          size="lg"
          width="80%"
          p={3}
          boxShadow="base"
          borderRadius="32px"
          bgColor="white"
          variant="flushed"
          //   value={enteredTodo}
          //   onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <IconButton
          aria-label="Submit Review"
          icon={<GoArrowUp />}
          isRound
          colorScheme="teal"
          size="md"
          bgColor="white"
          variant="outline"
          type="submit"
        />
      </HStack>
    </form>
  );
};

export default SubmitReview;
