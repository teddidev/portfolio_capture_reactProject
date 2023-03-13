//dependencies
import React from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//router
//switch component 는 match 하는 path 중에서 첫번째것만 return 하고 멈추게 함 >> routers wrap 하는 것으로 update 됨
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/work/:id" exact element={<MovieDetail />} />
        <Route path="/contact" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
