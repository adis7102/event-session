import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/index.jsx";
import Navbar from "./components/Navbar";
import EventSession from "./pages/EventSession";
import NotFound from "./pages/NotFound/index.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<EventSession />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
