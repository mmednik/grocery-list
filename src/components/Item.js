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

function Item({
  index,
  name,
  calories,
  editable,
  onClick,
  onDoubleClick,
  onKeyPress,
}) {
  return (
    <Flex alignItems="center">
      <Stat>
        {editable ? (
          <Input defaultValue={name} onKeyPress={(e) => onKeyPress(e, index)} />
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
        colorScheme="red"
      />
    </Flex>
  );
}

export default Item;
