import { Center, VStack, Heading } from "@chakra-ui/react";
import { Counter } from "../components/Counter";

export function HomePage() {
  return (
    <Center minH="100vh">
      <VStack gap={8}>
        <Heading size="lg" color="gray.800">
          Addou Counter
        </Heading>
        <Counter />
      </VStack>
    </Center>
  );
}
