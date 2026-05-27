import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return ctx;
}
