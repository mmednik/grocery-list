import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "./NewItem.scss";

function NewItem() {
  return (
    <FormControl id="email" pb="4">
      <Heading as="h4" size="md" pb="4">Add item</Heading>
      <Flex alignItems="flex-end">
        <Box>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" />
        </Box>
        <Spacer />
        <Box>
          <FormLabel>Calories</FormLabel>
          <NumberInput min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Spacer />
        <IconButton
          aria-label="Search database"
          colorScheme="green"
          icon={<AddIcon />}
        />
      </Flex>
    </FormControl>
  );
}

export default NewItem;
