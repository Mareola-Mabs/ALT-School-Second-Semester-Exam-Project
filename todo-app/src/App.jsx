import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import { isAuthenticated } from "./services/auth";
import { lazy, Suspense } from "react";
import TestError from "./pages/TestError";

const Dashboard = lazy(() => import("./pages/Dashboard"));

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

      {/* ErrorBoundary Route*/}
      <Route path="/test-error" element={<TestError />} />

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
