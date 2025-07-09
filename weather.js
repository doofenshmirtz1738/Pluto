export async function getWeather(city = "Homevale") {
  const apiKey = "YOUR_OPENWEATHERMAP_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  return `It's ${data.main.temp}°C with ${data.weather[0].description}.`;
}