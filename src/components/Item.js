import React from "react";
import {
  Flex,
  Input,
  Stat,
  StatNumber,
  StatHelpText,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import "./Item.scss";

function Item({ name, calories, onClick, onDoubleClick, editable }) {
  return (
    <Flex>
      <Stat>
        {editable ? (
          <Input value={name} />
        ) : (
          <StatNumber onDoubleClick={onDoubleClick}>{name}</StatNumber>
        )}
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

export default Item;
