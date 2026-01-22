import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
import PropertyDetails from "../pages/PropertyDetails";
import Mortgage from "../pages/Mortgage";
import Chat from "../pages/Chat";
import Dashboard from "../pages/Dashboard";
import AgentDashboard from "../pages/AgentDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import CRM from "../pages/CRM";
import Analytics from "../pages/Analytics";
import PrivateRoute from "../utils/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/mortgage" element={<Mortgage />} />

      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }/>

      <Route path="/agent" element={
        <PrivateRoute role="agent">
          <AgentDashboard />
        </PrivateRoute>
      }/>

      <Route path="/admin" element={
        <PrivateRoute role="admin">
          <AdminDashboard />
        </PrivateRoute>
      }/>

      <Route path="/crm" element={
        <PrivateRoute role="agent">
          <CRM />
        </PrivateRoute>
      }/>

      <Route path="/analytics" element={
        <PrivateRoute role="admin">
          <Analytics />
        </PrivateRoute>
      }/>

      <Route path="/chat" element={
        <PrivateRoute>
          <Chat />
        </PrivateRoute>
      }/>
    </Routes>
  );
}
