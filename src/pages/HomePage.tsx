import { Box, Center, VStack } from "@chakra-ui/react";
import { Counter } from "../components/Counter";

export function HomePage() {
  return (
    <Box minH="100vh" w="100%" bg="white" position="relative">
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        backgroundImage="radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)"
        backgroundSize="100% 100%"
      />
      <Box position="relative" zIndex={1}>
        <Center minH="100vh">
          <VStack gap={8}>
            <Counter />
          </VStack>
        </Center>
      </Box>
    </Box>
  );
}
