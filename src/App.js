import React, { useState, useEffect } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Feed from "./components/Feed";
import Food from "./components/Food";
import Training from "./components/Training";
import Kennel from "./components/Kennel";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Gethome from "./components/Gethome";
// import Faq from "./components/Faq";
import Clinic from "./components/Clinic";
import Medicine from "./components/Medicine";
import Reminder from "./components/Reminder";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import Lottie from "lottie-react";
import lottie from "./components/images/loading.json";
import lottie1 from "./components/images/load.png";
// import GetLocation from "./components/GetLocation";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

// import AlanAI from "../src/components/AlanAI";
// import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Lottie
          className="lottie d-flex mx-auto"
          animationData={lottie}
          background="transparent"
        />
        
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home key="home" />}></Route>
            <Route exact path="about" element={<About key="about" />}></Route>
            <Route
              exact
              path="feed"
              element={<Feed key="feed" />}
            ></Route>
            <Route
              exact
              path="food"
              element={<Food key="food" />}
            ></Route>
            <Route
              exact
              path="training"
              element={<Training key="training" />}
            ></Route>
            <Route
              exact
              path="kennel"
              element={<Kennel key="kennel" />}
            ></Route>
            <Route
              exact
              path="Clinic"
              element={<Clinic key="clinic" />}
            ></Route>
            <Route
              exact
              path="medicine"
              element={<Medicine key="medicine" />}
            ></Route>
            <Route
              exact
              path="faq"
              element={<Faq key="faq" />}
            ></Route>
            <Route
              exact
              path="gethome"
              element={<Gethome key="gethome" />}
            ></Route>
            {/* <Route
              exact
              path="doctor"
              element={<Faq key="faq" />}
            ></Route> */}
            <Route
              exact
              path="reminder"
              element={<Reminder key="reminder" />}
            ></Route>
            <Route
              exact
              path="signin"
              element={<SignIn key="signin" />}
            ></Route>
            <Route
              exact
              path="signup"
              element={<SignUp key="signup" />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
            <Route
              exact
              path="contact"
              element={<Contact key="contact" />}
            ></Route>
          </Routes>
          <Chatbot />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
