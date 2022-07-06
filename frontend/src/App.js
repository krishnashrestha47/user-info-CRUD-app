import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";

import { Register } from "./components/Register";
import { NavMenu } from "./components/NavMenu";
import { EditForm } from "./components/EditForm";
import { Details } from "./components/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<EditForm />} />
          <Route path="/view/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
