import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Landing from "./components/landing";

const App = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
