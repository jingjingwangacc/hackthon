class Weather {
  constructor(data, i){
    this.tempCurrent = data.data[0].coordinates[0].dates[i].value;
    this.tempMin = data.data[1].coordinates[0].dates[i].value;
    this.tempMax = data.data[2].coordinates[0].dates[i].value;
    this.symbol = data.data[3].coordinates[0].dates[i].value;
    this.windSpeed = data.data[4].coordinates[0].dates[i].value;
    this.prec = data.data[5].coordinates[0].dates[i].value;
    this.uvIndex = data.data[6].coordinates[0].dates[i].value;
  }
}

document.addEventListener('DOMContentLoaded', () => {
    // const title = document.createElement('h1');
    // title.innerText = 'Online Chatroom';
    // document.querySelector('body').appendChild(title);
    // make AJAX call here....

   let url = 'https://api.meteomatics.com/'   
   const today = new Date(); 
   //append dates to the url;
   const dateArray = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dateArray.push(date);
    url = url + date.toJSON() +',';
   }
   url = url.slice(0, -1);
  // console.log(url);
   
   let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJ2IjoxLCJ1c2VyIjoic2VsZi1lbXBsb3llZF93YW5nIiwiaXNzIjoibG9naW4ubWV0ZW9tYXRpY3MuY29tIiwiZXhwIjoxNjkwMDA5NTg4LCJzdWIiOiJhY2Nlc3MifQ.ZOrFBjeLjJ3hID03cURdrWchZJArDWrhKwAEWfqYa4ihlr9xMR2QbY3cMsDmOugBoTVcrO4m_AnYFx1C7kM9Og"
    fetch(url + '/t_2m:C,t_min_2m_24h:C,t_max_2m_24h:C,weather_symbol_24h:idx,wind_speed_10m:ms,precip_24h:mm,uv:idx/34.0522,-118.2437/json?access_token=' + token)
    .then((data) => data.json())
    .then((data) => {
        // console.log('data', data);
        const weatherToday = new Weather(data, 0);

        const symbolDiv = document.createElement('img');
        document.getElementById('todaysymbol').appendChild(symbolDiv);
        symbolDiv.setAttribute('src', './symbols/'+ weatherToday.symbol + '.png');

        document.getElementById('todaytemp').innerText = weatherToday.tempCurrent + ' °C';
        document.getElementById('windspeed').innerText = 'Wind: ' + weatherToday.windSpeed + ' m/s';
        document.getElementById('prec').innerText = 'Precip: ' + weatherToday.prec + ' mm';
        document.getElementById('uvindex').innerText = 'UV Index: ' + weatherToday.uvIndex;


        const weekDay = ['SUN', 'MON', 'TUE', 'WED','THU','FRI', 'SAT'];
        for (let i = 0; i < 5; i++) {
          const weather = new Weather(data, i);
        
          // console.log('current weather = ', weather);
          //create a div containing one day's weather request;
          const dayDiv = document.createElement('div');
          dayDiv.className = 'dayDiv';
          document.getElementById('weekcontainer').appendChild(dayDiv);

          const weekDiv = document.createElement('div');
          dayDiv.appendChild(weekDiv);
          weekDiv.innerText = weekDay[dateArray[i].getDay()];

          const symbolDiv = document.createElement('img');
          dayDiv.appendChild(symbolDiv);
          symbolDiv.setAttribute('src', './symbols/'+ weather.symbol + '.png');

          const divTempMin = document.createElement('div');
          dayDiv.appendChild(divTempMin);
          divTempMin.innerText = weather.tempMin + ' °C';

          const divTempMax = document.createElement('div');
          dayDiv.appendChild(divTempMax);
          divTempMax.innerText = weather.tempMax + ' °C';

        }
       

      })
      .catch((data) => console.log('alert'))
    });