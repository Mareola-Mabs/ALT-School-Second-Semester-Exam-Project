import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";



function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
