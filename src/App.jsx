import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
