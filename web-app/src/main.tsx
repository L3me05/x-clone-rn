import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";


const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!CLERK_KEY) throw Error("Clerk key required")
  else console.log(CLERK_KEY);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={CLERK_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
