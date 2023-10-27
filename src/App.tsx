import { ToastContainer } from "react-toastify";
import RoutesMain from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
