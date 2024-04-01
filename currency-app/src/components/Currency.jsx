import React from "react";
import "../stlye/Currency.css";

const Currency = () => {
  return (
    <div className="currency">
      <div>
        <input type="number" className="fromCurrency"></input>
      </div>
    </div>
  )
};

export default Currency;
