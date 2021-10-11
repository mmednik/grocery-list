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
import Item from "./components/Item";

const initList = [
  { name: "aceite", calories: 45 },
  { name: "almendras", calories: 11 },
  { name: "arroz", calories: 250 },
  { name: "azucar", calories: 20 },
];

function App() {
  const [list, setList] = useState(initList);
  const [editable, setEditable] = useState(false);

  function removeItemHandler(e) {
    const filteredList = list.filter((v) => v.name !== e.target.name);
    setList(filteredList);
  }

  function makeEditableHandler(e) {
    console.log(e.target)
    setEditable(true);
  }

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <VStack py="8" align="stretch" spacing="4">
          <Center>
            <Heading>Grocery List</Heading>
          </Center>
          {list.map((v, i) => {
            return (
              <Item
                key={`${i}${v.name}${v.calories}`}
                name={v.name}
                calories={v.calories}
                onClick={removeItemHandler}
                onDoubleClick={makeEditableHandler}
                editable={editable}
              />
            );
          })}
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
