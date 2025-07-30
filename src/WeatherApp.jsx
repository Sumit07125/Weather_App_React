import { useState } from "react";

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

import "./WeatherApp.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState();

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h1 className="head">Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      {weatherInfo && <InfoBox info={weatherInfo} />}
        
    </div>
  );
}
