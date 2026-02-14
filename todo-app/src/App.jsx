import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/404";
import { isAuthenticated } from "./components/Auth";
import { lazy, Suspense } from "react";

const Dashboard = lazy(()=> import('./components/Dashboard'))

const AuthDashboard = () => {

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <Dashboard />;
};


function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<AuthDashboard />} />


      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
