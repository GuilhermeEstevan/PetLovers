import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import { UserProvider } from "./context/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <App />
  </UserProvider>
);
