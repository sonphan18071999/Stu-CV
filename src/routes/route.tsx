import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCV from "../components/pages/create-page/CreateCV";
import LandingPage from "../components/pages/landing-page/LandingPage";

const Home = lazy(() => import("../App"));

export const MainRoutes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateCV />} />
      </Routes>
    </Suspense>
  </Router>
);
