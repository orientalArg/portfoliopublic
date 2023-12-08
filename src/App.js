import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import NoPage from "./pages/NoPage"
import Experience from "./pages/Experience";

function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  </div>
  );  
}
export default App;
