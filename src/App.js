import React, { useState } from "react";
import {
  ChakraProvider,
  Container,
  VStack,
  Center,
  Heading,
} from "@chakra-ui/react";
import theme from "./theme";
import "./App.scss";
import NewItem from "./components/NewItem";
import Item from "./components/Item";

const initList = [
  { name: "oil", calories: 45 },
  { name: "almonds", calories: 11 },
  { name: "rice", calories: 250 },
  { name: "sugar", calories: 20 },
];

function App() {
  const [list, setList] = useState(initList);
  const [editable, setEditable] = useState(false);

  function removeItemHandler(e) {
    const filteredList = list.filter((v) => v.name !== e.target.name);
    setList(filteredList);
  }

  function makeEditableHandler() {
    setEditable(true);
  }

  function keyPressHandle(e, i) {
    if (e.key === "Enter") {
      setEditable(!editable);
      const copyList = [...list];
      copyList[i].name = e.target.value;
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <VStack py="8" align="stretch" spacing="4">
          <Center>
            <Heading>Grocery List</Heading>
          </Center>
          <NewItem />
          {list.map((v, i) => {
            return (
              <Item
                key={`${i}${v.name}${v.calories}`}
                index={i}
                name={v.name}
                calories={v.calories}
                editable={editable}
                onClick={removeItemHandler}
                onDoubleClick={makeEditableHandler}
                onKeyPress={keyPressHandle}
              />
            );
          })}
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
