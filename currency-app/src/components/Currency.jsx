import React, { useState } from "react";
import "../stlye/Currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_ZH7OdnwGMBawHdnMbJzeECeDi0xzatiS0VBvkpgB";

const Currency = () => {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const handleClick = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    let result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency-div">
      <div className="header-div">
        <h1>Calculate Currency</h1>
      </div>
      <div className="currencyAll">
        <input
          value={amount}
          className="amount"
          onChange={(e) => setAmount(e.target.value)}
        ></input>

        <select
          className="from-currency-option"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight className="icon" />

        <select
          className="to-currency-option"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          className="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={handleClick} className="exchange-button">
          Çevir
        </button>
      </div>
    </div>
  );
};

export default Currency;
