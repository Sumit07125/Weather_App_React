import "./SearchBox.css";

import { useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  let API_KEY = "9f71bc8a3e02acc98cf341"; //.............. API KEY ENTER is wrong Api key please enter ypur key from openweather web app ............

  let getWeatherData = async (city) => {
    try {
      let res = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to fetch weather data.");
      }

      let jsonRes = await res.json();

      let result = {
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather:
          jsonRes.weather[0].description.charAt(0).toUpperCase() +
          jsonRes.weather[0].description.slice(1),
        city: city.charAt(0).toUpperCase() + city.slice(1),
      };
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setErr(false);
      let newInfo = await getWeatherData(city);
      setCity("");
      updateInfo(newInfo);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setErr(true);
      setCity("");
      updateInfo(null);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="searchBox">
          <TextField
            id="city"
            label="City Name"
            variant="filled"
            required
            value={city}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </div>
      </form>
      {err && <p style={{ color: "red" }}>No Such City Found</p>}
    </div>
  );
}