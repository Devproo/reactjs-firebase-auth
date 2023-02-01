import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Account from "./components/Account";
import LogIn from "./components/LogIn";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center ">
        Firebase Auth& Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
