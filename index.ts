import axios from "axios";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("api working");
});
interface getWeatherParams {
  lat: string;
  long: string;
}
app.get("/getWeatherData/:lat/:long", async (req, res) => {
  const params: getWeatherParams = req.params as getWeatherParams;
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.long}&current_weather=true`
    );
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
