let currentTime = new Date();
let datetoday = document.querySelector("h3");
datetoday.innerHTML = formDate(currentTime);

function formDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let citysearch = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${citysearch.value} <i class="fas fa-temperature-high"> </i>`;

  searchCity(citysearch.value);
}

let searchform = document.querySelector("#city-form");
searchform.addEventListener("submit", search);

function searchCity(city) {
  let apiKey = "d29f07d8b5161b82f3e1b25f1f4fc000";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  let apiCall = `${apiUrl}&appid=${apiKey}`;
  axios.get(apiCall).then(showtemperature);
}

function showtemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#innertemp");
  temperatureElement.innerHTML = `${temperature}`;
}
