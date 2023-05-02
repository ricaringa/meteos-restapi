import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('api working')
});
interface getWeatherParams{
  lat: string,
  long: string
}
app.get('/getWeatherData/:lat/:long', async (req, res)=>{
  const params : getWeatherParams = req.params as getWeatherParams
  const request = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.long}&current_weather=true`)
  const response : Response = await request.json()
  res.send(response)
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`))