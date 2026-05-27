import { Button, Text, HStack } from "@chakra-ui/react";
import { useCounter } from "../hooks/useCounter";
import { toaster } from "./Toaster";

export function Counter() {
  const { count, increment } = useCounter();

  function handleIncrement() {
    increment();
    const next = count + 1;
    toaster.create({
      title: "Incremented",
      description: `Counter is now ${next}`,
      duration: 3000,
    });
  }

  return (
    <HStack gap={4}>
      <Text fontSize="lg" color="gray.700">
        Current count {count}
      </Text>
      <Button
        onClick={handleIncrement}
        borderRadius="full"
        bg="gray.100"
        color="gray.700"
        fontWeight="500"
        px={5}
        _hover={{ bg: "gray.200" }}
      >
        +1
      </Button>
    </HStack>
  );
}
