import { createToaster, Toaster as ChakraToaster } from "@chakra-ui/react";
import { CounterToast } from "./CounterToast";

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
});

/** Drop <Toaster /> once inside your Provider tree */
export function Toaster() {
  return (
    <ChakraToaster toaster={toaster}>
      {(toast) => (
        <CounterToast
          title={String(toast.title ?? "Incremented")}
          description={String(toast.description ?? "")}
        />
      )}
    </ChakraToaster>
  );
}
