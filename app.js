const API_KEY = `74a618ff2544e59b2a15c110ca30f971`;
const searchTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

const setInnerText = (id, Text) => {
    document.getElementById(id).innerText = Text;
}

const displayData = temperature => {
    setInnerText("city",temperature.name);
    setInnerText("temperature",temperature.main.temp);
    setInnerText("humidity",'Humidity :' + ' ' +temperature.main.humidity+'%');
    setInnerText("condition",temperature.weather[0].main);
    setInnerText("wind", 'Wind - speed :' + ' ' + temperature.wind.speed + ' ' + 'km/h' );
    //set image
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}.png`;
    const image = document.getElementById("image").setAttribute("src",url);
}