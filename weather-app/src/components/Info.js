import { WiSunset } from "react-icons/wi";

const Info = ({ data, state }) => {
  return (
    <div>
      {state ? (
        <div className="info">
          <p id="sehir">
            {data.name}, {data.sys.country}
          </p>
          <div className="genelDeger">
            <p id="sicaklik">Sıcaklık: {data.main.temp}</p>
            <WiSunset className="fa-c" />
          </div>
          <p id="havaDurumu">Hava Durumu : {data.weather[0].description}</p>
          <div className="his">
            <p id="hissedilen">Hissedilen : {data.main.feels_like}</p>
            <WiSunset className="fa-c" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { Info };
