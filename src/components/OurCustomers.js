import React from "react";
import customerImg from "../assets/customer.png";
import "../css/customer.css";

export default function OurCustomers() {
  return (
    <>
      <div className="customers">
        <h1>Our Customers</h1>
        <br></br>
        <img src={customerImg} alt="ourCustomers" />
      </div>
    </>
  );
}
