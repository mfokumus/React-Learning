import { WiSunset } from "react-icons/wi";

const Info = () => {
  return (
    <div className="info">
        <p id="sehir">Şehir, ülke</p>
        <div className="genelDeger">
            <p id="sicaklik">--</p><WiSunset className="fa-c"/>
        </div>
        <p id="havaDurumu">Hava Durumu</p>
        <div className="his">
            <p id="hissedilen">Hissedilen</p><WiSunset className="fa-c"/>
        </div>
    </div>
  );
};

export { Info };
