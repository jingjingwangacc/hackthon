class Weather {
  constructor(data, i){
    this.tempCurrent = data.data[0].coordinates[0].dates[i].value;
    this.tempMin = data.data[1].coordinates[0].dates[i].value;
    this.tempMax = data.data[2].coordinates[0].dates[i].value;
    this.symbol = data.data[3].coordinates[0].dates[i].value;
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
   
   let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJ2IjoxLCJ1c2VyIjoic2VsZi1lbXBsb3llZF93YW5nIiwiaXNzIjoibG9naW4ubWV0ZW9tYXRpY3MuY29tIiwiZXhwIjoxNjg5OTkzOTExLCJzdWIiOiJhY2Nlc3MifQ.VWzzbxHv0aIQXSymVxZ_-GrqLUaTtaHPg27MZs9l3uZutuEuqpP8L08bhpEE_YLvQjl2OCvCyLGTuc5dOPmPWg"
    fetch(url + '/t_2m:C,t_min_2m_24h:C,t_max_2m_24h:C,weather_symbol_24h:idx/postal_CH9014/json?access_token=' + token)
    .then((data) => data.json())
    .then((data) => {
        console.log('data', data);
        const weekDay = ['SUN', 'MON', 'TUE', 'WED','THU','FRI', 'SAT'];
        for (let i = 0; i < 5; i++) {
          const weather = new Weather(data, i);
        
          // console.log('current weather = ', weather);
          //create a div containing one day's weather request;
          const dayDiv = document.createElement('div');
          dayDiv.className = 'dayDiv';
          document.getElementById('container').appendChild(dayDiv);

          const weekDiv = document.createElement('div');
          dayDiv.appendChild(weekDiv);
          weekDiv.innerText = weekDay[dateArray[i].getDay()];

          const symbolDiv = document.createElement('img');
          dayDiv.appendChild(symbolDiv);
          symbolDiv.setAttribute('src', './symbols/'+ weather.symbol + '.png');

          const divTemp = document.createElement('div');
          dayDiv.appendChild(divTemp);
          divTemp.innerText = weather.tempCurrent;

          const divTempMin = document.createElement('div');
          dayDiv.appendChild(divTempMin);
          divTempMin.innerText = weather.tempMin;

          const divTempMax = document.createElement('div');
          dayDiv.appendChild(divTempMax);
          divTempMax.innerText = weather.tempMax;

        }
       

      })
      .catch((data) => console.log('alert'))
    });