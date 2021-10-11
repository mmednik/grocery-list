import React, { useState } from "react";
import { ChakraProvider, Container, Center, Heading, Button } from "@chakra-ui/react"
import "./App.scss";
import Item from "./components/Item";

const initList = [
  { name: "aceite", calories: 45 },
  { name: "almendras", calories: 11 },
  { name: "arroz", calories: 250 },
  { name: "azúcar", calories: 20 }
];

function App() {
  const [list, setList] = useState(initList);

  const removeUnhealthyHandler = (e) => {
    const filteredList = list.filter(v=>v.calories<=50);
    setList(filteredList);
  }

  return (
    <ChakraProvider>
      <Container maxW="container.md">
        <Center>
          <Heading>Grocery List</Heading>
        </Center>
        {
          list.map((v,i) => {
            return <Item key={`${i}${v.name}${v.calories}`} name={v.name} calories={v.calories} />
          })
        }
        <Button onClick={removeUnhealthyHandler} >Remove unhealthy ingredients</Button>
      </Container>
    </ChakraProvider>
  );
}

export default App;
