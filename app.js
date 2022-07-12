const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const location2 = document.querySelector(".location");

weather();

function weather(city) {
  let tempInitialvalue = temp.innerText;

  city = input.value;
  if (city === "") {
    city = "Tokyo";
  } else {
    city = input.value;
  }

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=33eaa95cb22dd08283ec2b4805ad602e"
  )
    .then((response) => response.json())

    .then((data) => {
      console.log(data);

      const locationValue = data["name"];
      const tempValue = data["main"]["temp"];
      const descValue = data["weather"]["0"]["description"];
      const humidValue = data["main"]["humidity"];
      const windValue = data["wind"]["speed"];

      location2.innerText = "Weather In " + locationValue;
      temp.innerText = tempValue + "°C";
      desc.innerText = descValue;
      humidity.innerText = "Humdity: " + humidValue + "%";
      wind.innerText = "Wind: " + windValue + "km/h";

      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + city + "')";
    });
}

btn.addEventListener("click", weather);

input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    btn.click();
  }
});
