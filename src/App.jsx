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
import { Routes, Route, useLocation } from "react-router-dom";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
  //AnimatePresence 를 사용하려면 we need the key of the page that we are on
  const location = useLocation();
  // console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* mode=wait : 이전 animation 끝나고 다음 animation 실행 */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/work/:id" exact element={<MovieDetail />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
