import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {

  return (
      <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route path="" element={<Home />}/>
          </Route>
      </Routes>
  );
}

export default App;

