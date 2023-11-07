import RegisterForm from "./components/AuthForm/Register";
import LoginForm from "./components/AuthForm/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import EmailTextEditor from "./model/EmailTextEditor";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
       

        <Route path="/register" Component={RegisterForm} />
        <Route path="/login" Component={LoginForm} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
