// import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterForm from './components/AuthForm/Register';
import LoginForm from './components/AuthForm/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" Component={RegisterForm} />
      <Route path="/login" Component={LoginForm} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
