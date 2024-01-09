import React, { useEffect, useState } from "react";

const Form = () => {

    const [city, setCity] = useState("")
    const [data, setData] = useState({}) 

    const handleChange = (e) => {
        e.preventDefault();

    }

    console.log(city)

  return (
    <div>
      <h1>Hava Durumu</h1>
      <form onSubmit={(e) => {handleChange(e)}}>
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
            Sonuclari Goster
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
