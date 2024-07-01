import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import HomePage from "./components/HomePage";
import FullBlog from "./components/FullBlog";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/full-blog/:id" element={<FullBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
