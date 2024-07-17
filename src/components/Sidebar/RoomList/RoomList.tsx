import { ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react'

const RoomList = () => {
  return (
    <UnorderedList listStyleType="none">
      <ListItem
        textAlign="center"
        // m="2"
        p="2"
        cursor="pointer"
        transition=".3s"
        _hover={{ backgroundColor: "gray.200" }}
        rounded="16px"
        fontSize="sm"
      >
        Room 1
      </ListItem>
    </UnorderedList>
  );
}

export default RoomList