import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
