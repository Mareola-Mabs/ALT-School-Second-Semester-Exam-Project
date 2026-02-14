import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import { isAuthenticated } from "./pages/Auth";
import { lazy, Suspense } from "react";

const Dashboard = lazy(()=> import('./pages/Dashboard'))

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
