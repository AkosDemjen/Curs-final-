import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movies } from "./pages/Movies";
import { MoviesDetails } from "./pages/MoviesDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Movies />} />
        <Route path="/movie/:id" element={<MoviesDetails />} />

        {/* 404 route */}
        <Route path="*" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
