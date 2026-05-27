import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { CounterProvider } from "./context/CounterContext";
import { Toaster } from "./components/Toaster";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <CounterProvider>
        <HomePage />
        <Toaster />
      </CounterProvider>
    </ChakraProvider>
  );
}
