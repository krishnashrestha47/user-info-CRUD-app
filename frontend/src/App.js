import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";

import { Register } from "./components/Register";
import { EditForm } from "./components/EditForm";
import { Details } from "./components/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:_id" element={<EditForm />} />
          <Route path="/view/:_id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
