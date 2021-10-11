import React from "react";
import {
  Flex,
  Stat,
  StatNumber,
  StatHelpText,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import "./GroceryItem.scss";

function GroceryItem({ name, calories }) {
  return (
    <Flex>
      <Stat>
        <StatNumber>{name}</StatNumber>
        <StatHelpText>{calories} calories</StatHelpText>
      </Stat>
      <IconButton aria-label="Remove item" icon={<DeleteIcon />} />
    </Flex>
  );
}

export default GroceryItem;
