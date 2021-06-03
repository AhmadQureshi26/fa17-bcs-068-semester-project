import React from "react";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Customers from "./components/OurCustomers";
import "./App.css";
console.log(process.env.REACT_APP_API_URL);

function App() {
  return (
    <>
      {/* ws */}
      <Navbar />
      <Carousel />
      <div className="information">
        <About />
        <Services />
      </div>
      <Customers />
      <Footer />
    </>
  );
}

export default App;
