import React from "react";

import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import FullElfbar from "./pages/FullElfbar";
import Cart from "./pages/Cart";

function App() {

  return (
      <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route path="" element={<Home />}/>
              <Route path="elfbar/:slug/:charge" element={<FullElfbar />} />
              <Route path={"cart/"} element={<Cart />} />
          </Route>
      </Routes>
  );
}

export default App;

