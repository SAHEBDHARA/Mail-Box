import RegisterForm from "./components/AuthForm/Register";
import LoginForm from "./components/AuthForm/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import List from "./components/list/List";
import Openemail from "./components/OpenEmail/Openemail";

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
       
        <Route
          path="/inbox"
          element={
            <RequireAuth>
              <List activeComponent="inbox" />
            </RequireAuth>
          }
        />
        <Route
          path="/sent"
          element={
            <RequireAuth>
              <List activeComponent="sent" />
            </RequireAuth>
          }
        />
        <Route
          path="/email/:id"
          element={
            <RequireAuth>
              <List activeComponent="single"  />
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
