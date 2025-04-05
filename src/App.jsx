import React from "react";
import { Home, AboutUs, Blog, ContactUs, Startup } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.HOME} element={<Home />} />
        <Route path={APP_URL.STARTUP} element={<Startup />} />
        <Route path={APP_URL.BLOG} element={<Blog />} />
        <Route path={APP_URL.CONTACT_US} element={<ContactUs />} />
        <Route path={APP_URL.ABOUT_US} element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
