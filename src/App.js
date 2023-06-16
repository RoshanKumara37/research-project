import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Processing from "./pages/Processing";
import ServerData from "./pages/ServerData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/processing" element={<Processing />}></Route>
        <Route path="/server-data" element={<ServerData />}></Route>
      </Routes>
    </>
  );
}

export default App;
