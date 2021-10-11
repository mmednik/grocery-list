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
import GroceryItem from "./components/GroceryItem";

const initList = [
  { name: "aceite", calories: 45 },
  { name: "almendras", calories: 11 },
  { name: "arroz", calories: 250 },
  { name: "azucar", calories: 20 },
];

function App() {
  const [list, setList] = useState(initList);

  function removeItemHandler(e) {
    const filteredList = list.filter((v) => v.name !== e.target.name);
    setList(filteredList);
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
              <GroceryItem
                key={`${i}${v.name}${v.calories}`}
                name={v.name}
                calories={v.calories}
                onClick={removeItemHandler}
              />
            );
          })}
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
