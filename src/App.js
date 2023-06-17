import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Processing from "./pages/Processing";
import ServerData from "./pages/ServerData";
import FinalData from "./pages/FinalData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/processing" element={<Processing />}></Route>
        <Route path="/server-data" element={<ServerData />}></Route>
        <Route path="/final-data" element={<FinalData />}></Route>
      </Routes>
    </>
  );
}

export default App;
