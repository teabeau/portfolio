
let input = document.querySelector('input');
input.addEventListener('keyup', function (e) {

    if (e.key === 'Enter') {
        getWeather();
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${input.value}')`;
    }
})



function getWeather() {
    let xhr = new XMLHttpRequest(); // STEP 1
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=316b857b55d97f8cbdd60a3eaa252f07`); // STEP 2

    // STEP 4
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === xhr.DONE) {
            // Remember to use responseTEXT instead of responseXML
            // console.log(xhr.responseText);

            let data = JSON.parse(xhr.responseText);
            // JSON.stringify();
            console.log(data);
            formatData(data);
            formatDataid1(data);
            formatDataid2(data);
            formatDataid3(data);
            formatDataid4(data);
        }
    })
    xhr.send(null); // STEP 3
}

const main = document.getElementById('main');


function getCel(number) {
    return number - 273.15;
};

let city = document.createElement('h2');
let icon = document.createElement('img');
let temp = document.createElement('h2');
let weather = document.createElement('p');
let date = document.createElement('p');

function formatData(data) {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dt = data.list[0].dt;
    const d = new Date(dt * 1000);
    let day = weekday[d.getDay()];

    city.textContent = data.city.name;
    weather.textContent = data.list[0].weather[0].description;
    icon.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`;
    icon.setAttribute('style', 'filter: drop-shadow(10px 5px 5px rgba(0, 84, 139, 0.6));')
    temp.textContent = Math.round(getCel(data.list[0].main.temp)) + '°C';
    date.textContent = day;

    main.insertBefore(city, main.lastElementChild);
    main.insertBefore(date, main.lastElementChild);
    main.insertBefore(icon, main.lastElementChild);
    main.insertBefore(temp, main.lastElementChild);
    main.insertBefore(weather, main.lastElementChild);

    let detail1 = document.getElementById('wind');
    detail1.textContent = 'Wind: ' + data.list[0].wind.speed + ` m/s`;

    let detail2 = document.getElementById('humid');
    detail2.textContent = 'Humidity: ' + data.list[0].main.humidity + '%';

    let detail3 = document.getElementById('pres');
    detail3.textContent = 'Pressure: ' + data.list[0].main.pressure + ` hPa`;

    let detail4 = document.getElementById('cloud');
    detail4.textContent = 'Cloudiness: ' + data.list[0].clouds.all + `%`;
}

let icon1 = document.createElement('img');
let temp1 = document.createElement('h2');
let weather1 = document.createElement('p');
let date1 = document.createElement('h2');
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatDataid1(data) {

    let dt = data.list[8].dt;
    const d = new Date(dt * 1000);
    let day = weekday[d.getDay()];

    date1.textContent = day;

    weather1.textContent = data.list[1].weather[0].description;
    icon1.src = `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@4x.png`;
    temp1.textContent = Math.round(getCel(data.list[1].main.temp)) + '°C';

    id1.appendChild(date1);
    id1.appendChild(icon1);
    id1.appendChild(temp1);
    id1.appendChild(weather1);
}


let icon2 = document.createElement('img');
let temp2 = document.createElement('h2');
let weather2 = document.createElement('p');
let date2 = document.createElement('h2');


function formatDataid2(data) {

    let dt = data.list[16].dt;
    const d = new Date(dt * 1000);
    let day = weekday[d.getDay()];
    date2.textContent = day;

    weather2.textContent = data.list[2].weather[0].description;
    icon2.src = `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@4x.png`;
    temp2.textContent = Math.round(getCel(data.list[2].main.temp)) + '°C';

    id2.appendChild(date2);
    id2.appendChild(icon2);
    id2.appendChild(temp2);
    id2.appendChild(weather2);
}

let icon3 = document.createElement('img');
let temp3 = document.createElement('h2');
let weather3 = document.createElement('p');
let date3 = document.createElement('h2');

function formatDataid3(data) {

    let dt = data.list[24].dt;
    const d = new Date(dt * 1000);
    let day = weekday[d.getDay()];

    date3.textContent = day;

    weather3.textContent = data.list[3].weather[0].description;
    icon3.src = `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@4x.png`;
    temp3.textContent = Math.round(getCel(data.list[3].main.temp)) + '°C';

    id3.appendChild(date3);
    id3.appendChild(icon3);
    id3.appendChild(temp3);
    id3.appendChild(weather3);
}

let icon4 = document.createElement('img');
let temp4 = document.createElement('h2');
let weather4 = document.createElement('p');
let date4 = document.createElement('h2');

function formatDataid4(data) {

    let dt = data.list[32].dt;
    const d = new Date(dt * 1000);
    let day = weekday[d.getDay()];

    date4.textContent = day;

    weather4.textContent = data.list[4].weather[0].description;
    icon4.src = `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@4x.png`;
    temp4.textContent = Math.round(getCel(data.list[4].main.temp)) + '°C';

    id4.appendChild(date4);
    id4.appendChild(icon4);
    id4.appendChild(temp4);
    id4.appendChild(weather4);
}