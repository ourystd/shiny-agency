import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "./pages/Survey";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import ProfileDetails from "./pages/ProfileDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="survey/:questionNumber" element={<Survey />} />
          <Route path="results" element={<Results />} />
          <Route path="freelances">
            <Route index element={<Freelances />} />
            <Route path=":profileId" element={<ProfileDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
