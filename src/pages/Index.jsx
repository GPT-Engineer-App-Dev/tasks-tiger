import React, { useState } from "react";
import { Box, Input, VStack, Heading, IconButton, HStack, Text, useToast, Container } from "@chakra-ui/react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  const TodoList = () => (
    <VStack spacing={4}>
      {todos.map((todo, index) => (
        <HStack key={index} width="100%">
          <Text flex={1} p={4} borderWidth="1px" borderRadius="md">
            {todo}
          </Text>
          <IconButton icon={<FaTrashAlt />} isRound="true" onClick={() => removeTodo(index)} />
        </HStack>
      ))}
    </VStack>
  );

  return (
    <Container centerContent p={8}>
      <VStack spacing={8} width="100%">
        <Heading>Todo App</Heading>
        <HStack width="100%">
          <Input flex={1} value={inputValue} onChange={handleInputChange} placeholder="Add a new todo..." />
          <IconButton aria-label="Add todo" icon={<FaPlus />} onClick={addTodo} />
        </HStack>
        <Box width="100%">
          <TodoList />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
