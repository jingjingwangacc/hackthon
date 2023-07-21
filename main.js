document.addEventListener('DOMContentLoaded', () => {
    // const title = document.createElement('h1');
    // title.innerText = 'Online Chatroom';
    // document.querySelector('body').appendChild(title);
    // make AJAX call here....
//     const newDiv = document.createElement('div')
//     document.getElementById('container').appendChild(newDiv)
    fetch('https://api.meteomatics.com/2023-07-20T18:22Z/t_min_2m_24h:C,t_max_2m_24h:C/postal_CH9014/json?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJ2IjoxLCJ1c2VyIjoic2VsZi1lbXBsb3llZF93YW5nIiwiaXNzIjoibG9naW4ubWV0ZW9tYXRpY3MuY29tIiwiZXhwIjoxNjg5OTE1Njk2LCJzdWIiOiJhY2Nlc3MifQ.1hv7Y_tGqYv6DYgLqAbWfUOElJ1zK2b5dO-3MuTcSM6xkxKUrbKC6qMzCO2jUEtvNa7Us4g67eljHTDxgT77CQ')
    .then((data) => data.json())
    .then((data) => {
        console.log('data', data);
      })
      .catch((data) => console.log('alert'))
    });