import React from "react";
import "../css/Quote.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import QuoteForm from "./QuoteForm";
export default () => {
  return (
    <>
      <Navbar />
      <QuoteForm />
      <Footer />
    </>
  );
};
