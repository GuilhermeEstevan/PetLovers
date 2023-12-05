import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import { UserProvider } from "./context/userContext.tsx";
import { PetProvider } from "./context/petContext.tsx";

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <PetProvider>
      <App />
    </PetProvider>
  </UserProvider>
);
