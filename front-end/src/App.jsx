import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Landing from "./components/landing";
import Login from "./components/login";
import Register from "./components/register";
import auth from "./services/authService";

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => setUser(auth.getCurrentUser()), []);

  return (
    <div className="w-full h-full">
      <Routes>
        <Route
          path="/"
          element={
            !user?.name ? (
              <Landing user={user} />
            ) : (
              <Navigate to="/dashboard/" />
            )
          }
        />
        <Route
          path="/dashboard/*"
          element={user?.name ? <Dashboard user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={
            user?.name ? (
              <Navigate to="/dashboard/" />
            ) : (
              <Login setUser={setUser} />
            )
          }
        />
        <Route
          path="/register"
          element={user?.name ? <Navigate to="/dashboard/" /> : <Register />}
        />
      </Routes>
    </div>
  );
};

export default App;
