import react from "react"
import Signup from "./pages/signup/Signup";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
