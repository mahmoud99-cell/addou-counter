# Addou Counter

A TypeScript + React application built with Vite and Chakra UI v3.

## Tech Stack

- **Vite** — build tool / dev server
- **React 19** + **TypeScript**
- **Chakra UI v3** — component library & toast system
- **react-icons** — checkmark icon (`LuCircleCheck`)

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
  assets/              # static assets
  components/
    Counter.tsx        # +1 button + count display
    CounterToast.tsx   # custom Figma-matched toast UI
    Toaster.tsx        # toaster singleton + <Toaster /> mount
  context/
    CounterContext.tsx # CounterContext + CounterProvider
  hooks/
    useCounter.ts      # useCounter() custom hook
  pages/
    HomePage.tsx       # page layout
  App.tsx              # root — wires providers + Toaster
  main.tsx             # entry point
```

## Key Design Decisions

### Global State — `CounterContext`
Counter value lives in `CounterContext` at the app root.
`useCounter()` exposes `{ count, increment }` and throws if used outside the provider.

### Toast — Chakra UI v3
Uses `createToaster()` for a singleton store and `<Toaster>` (mounted once in `App.tsx`)
with a children render function mapping each toast to `<CounterToast>`.

### Gradient Border
`border-image-source` breaks `border-radius`. The border is achieved via the `background-clip` trick:

```css
background:
  linear-gradient(#6F7076, #6F7076) padding-box,
  radial-gradient(...) border-box;
border: 1px solid transparent;
```

This gives a gradient border with full `border-radius` support.
