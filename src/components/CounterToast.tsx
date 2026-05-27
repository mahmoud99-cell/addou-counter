import { Box, Text } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { keyframes } from "@emotion/react";

const toastIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface CounterToastProps {
  title: string;
  description: string;
}

/**
 * Matches Figma spec:
 * - Gradient border via background-clip trick (avoids border-image breaking border-radius)
 * - Dark fill with subtle radial green glow
 * - Green checkmark + bold title + lighter description
 */
export function CounterToast({ title, description }: CounterToastProps) {
  return (
    <Box
      animation={`${toastIn} 180ms ease-out`}
      style={{
        background:
          "linear-gradient(#6F7076, #6F7076) padding-box, " +
          "radial-gradient(circle at 2% 50%, rgba(116,200,152,0.65) 0%, rgba(116,200,152,0.1) 100%) border-box",
        border: "1px solid transparent",
        borderRadius: "8px",
        display: "inline-block",
      }}
    >
      <Box
        style={{
          background:
            "radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116,200,152,0.15) 0%, rgba(116,200,152,0.03) 100%), #46474F",
          boxShadow:
            "0px 0px 0px 1px rgba(40,41,50,0.04)," +
            "0px 2px 2px -1px rgba(40,41,50,0.04)," +
            "0px 4px 4px -2px rgba(40,41,50,0.04)," +
            "0px 8px 8px -4px rgba(40,41,50,0.06)," +
            "0px 16px 32px rgba(40,41,50,0.06)",
          borderRadius: "7px",
          padding: "12px 20px 12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          minWidth: "260px",
        }}
      >
        <LuCircleCheck size={24} color="#74C898" style={{ flexShrink: 0 }} />
        <Box>
          <Text
            style={{
              fontFamily: "Inter, sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "16px",
              color: "#FFFFFF",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "Inter, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#FFFFFF",
            }}
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
