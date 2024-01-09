import React, { useState } from "react";

const Form = () => {

    const [city, setCity] = useState("")


    const handleChange = (e) => {
        setCity(e.target.value)
    }
    
  return (
    <div>
      <h1>Hava Durumu</h1>
      <form>
        <div className="form">
          <input
            className="input-text"
            type="text"
            placeholder="Lutfen bir sehir adi giriniz"
            onChange={handleChange}
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
