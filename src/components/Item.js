import React from "react";
import { Stat, StatNumber, StatHelpText } from "@chakra-ui/react";
import "./Item.scss";

function Item({ name, calories }) {
  return (
    <Stat>
      <StatNumber>{name}</StatNumber>
      <StatHelpText>{calories} calories</StatHelpText>
    </Stat>
  );
}

export default Item;
