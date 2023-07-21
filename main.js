document.addEventListener('DOMContentLoaded', () => {
    // const title = document.createElement('h1');
    // title.innerText = 'Online Chatroom';
    document.querySelector('body').appendChild(title);
    // make AJAX call here....
//     const newDiv = document.createElement('div')
//     document.getElementById('container').appendChild(newDiv)
    fetch('https://api.meteomatics.com/2023-07-20T18:22Z/t_min_2m_24h:C,t_max_2m_24h:C/postal_90042/json')
    .then((data) => data.json())
    .then((data) => {
        console.log(data);
      })
      .catch((data) => console.log('alert'))
    });