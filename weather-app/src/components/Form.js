import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = ({ setData, setState }) => {
  const [city, setCity] = useState("");

  const handleChange = async(e) => {
    e.preventDefault();
    const apiKey = "408a095303fbfb989ecb6a94f73bf3bc";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
    await axios
      .get(baseURL)
      .then((response) => {
        console.log(response.data); // Log the response data
        setData(response.data); // Set the data state
        setState(true)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <h1>Hava Durumu</h1>
      <form
        onSubmit={(e) => {
          handleChange(e);
        }}
      >
        <div className="form">
          <input
            className="input-text"
            type="text"
            placeholder="Lutfen bir sehir adi giriniz"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Hava Durumunu Göster
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
