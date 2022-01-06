import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import PricingTables from "./PricingTable";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "./Course";
import Navbar from "./components/Navbar";
import Display from "./components/Display";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pricing-tables" element={<PricingTables />} />
        <Route path="course" element={<Course />}>

          <Route path=":courseId" element={<Display />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
