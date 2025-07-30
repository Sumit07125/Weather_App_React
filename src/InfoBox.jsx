import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./InfoBox.css";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  let COLD_URL =
    "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let RAIN_URL =
    "https://media.istockphoto.com/id/1013631650/photo/weather-characteristic-autumn.jpg?s=612x612&w=0&k=20&c=GaiJD2OoNQzt4oyyAkMvbTiFqCrj4DXbddYBcWNH-Xc=";

  return (
    <div className="InfoBox" >
      <p>
        <b>
           <h2 className="location-heading"><u>Location</u>:-
  {info.city}
</h2>
        </b>
      </p>
      <div className="cardContainer" id="box">
        <Card sx={{ maxWidth: 320 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humidity >= 70
                  ? RAIN_URL
                  : info.temp > 25
                  ? HOT_URL
                  : COLD_URL
              }
              alt="weather"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.weather}&nbsp;
                {info.humidity >= 70 ? (
                  <ThunderstormIcon />
                ) : info.temp > 25 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature: {info.temp}&deg;C</p>
                <p>Max Temp: {info.tempMax}&deg;C</p>
                <p>Min Temp: {info.tempMin}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>
                  The Weather Can Be Described As <i>{info.weather}</i> and
                  feels like <i>{info.feelsLike}&deg;C</i>
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
