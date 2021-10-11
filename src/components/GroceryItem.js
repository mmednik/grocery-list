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

function GroceryItem({ name, calories, onClick }) {
  return (
    <Flex>
      <Stat>
        <StatNumber>{name}</StatNumber>
        <StatHelpText>{calories} calories</StatHelpText>
      </Stat>
      <IconButton
        name={name}
        aria-label="Remove item"
        icon={<DeleteIcon />}
        onClick={onClick}
      />
    </Flex>
  );
}

export default GroceryItem;
