import React, { useState } from "react";
import {
  ChakraProvider,
  Container,
  VStack,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";
import theme from "./theme";
import "./App.scss";
import GroceryItem from "./components/GroceryItem";

const initList = [
  { name: "aceite", calories: 45 },
  { name: "almendras", calories: 11 },
  { name: "arroz", calories: 250 },
  { name: "azúcar", calories: 20 },
];

function App() {
  const [list, setList] = useState(initList);

  const removeUnhealthyHandler = (e) => {
    const filteredList = list.filter((v) => v.calories <= 50);
    setList(filteredList);
  };

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
              />
            );
          })}
          <Button onClick={removeUnhealthyHandler} colorScheme="red">
            Remove unhealthy ingredients
          </Button>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
