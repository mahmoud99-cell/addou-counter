import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { LuPlus } from "react-icons/lu";
import { useCounter } from "../hooks/useCounter";
import { toaster } from "./Toaster";

const MotionBox = motion(Box);

export function Counter() {
  const { count, increment } = useCounter();

  const triggerToast = (message: string, type: "success" | "info") => {
    toaster.create({
      title: message,
      description: "Current count values match state.",
      type,
      duration: 2500,
    });
  };

  return (
    <Box
      bg="var(--color-bg-surface)"
      border="1px solid"
      borderColor="var(--color-border-subtle)"
      borderRadius="var(--radius-lg)"
      p="var(--space-5)"
      boxShadow="var(--shadow-lg)"
      w="320px"
    >
      <HStack justify="space-between" mb="var(--space-4)">
        <Text
          fontSize="var(--font-size-xs)"
          fontWeight="var(--font-weight-semibold)"
          color="var(--color-text-muted)"
          textTransform="uppercase"
          letterSpacing="0.05em"
        >
          Addou Counter
        </Text>
      </HStack>

      <HStack
        bg="var(--color-bg-main)"
        border="1px solid"
        borderColor="var(--color-border-subtle)"
        p="var(--space-2)"
        borderRadius="var(--radius-md)"
        justify="space-between"
        className="ds-transition"
        _focusWithin={{
          borderColor: "var(--color-border-focus)",
          boxShadow: "var(--shadow-focus)",
        }}
      >
        <Box
          position="relative"
          overflow="hidden"
          h="40px"
          w="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AnimatePresence mode="popLayout">
            <MotionBox
              key={count}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <Text
                fontSize="var(--font-size-2xl)"
                fontWeight="var(--font-weight-semibold)"
                fontFamily="var(--font-family)"
                className="ds-text-gradient"
              >
                {count}
              </Text>
            </MotionBox>
          </AnimatePresence>
        </Box>

        <Button
          aria-label="Increment value"
          onClick={() => {
            increment();
            triggerToast(`Incremented to ${count + 1}`, "success");
          }}
          size="md"
          bg="var(--color-brand-500)"
          color="var(--color-text-on-brand)"
          _hover={{ bg: "var(--color-brand-600)" }}
          _active={{ bg: "var(--color-brand-700)" }}
          px="var(--space-4)"
        >
          <LuPlus size={16} />
        </Button>
      </HStack>
    </Box>
  );
}
