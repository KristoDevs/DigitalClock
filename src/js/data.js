//const axios = require('axios');

const startTime = () => {
  const current_date = new Date();
  let hours = checkTime(current_date.getHours());
  let minutes = checkTime(current_date.getMinutes());
  let seconds = checkTime(current_date.getSeconds());
  
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}

const checkTime = input => {
  if(input < 10) { 
    input = '0' + input;
  }

  return input;
}

setInterval(startTime, 1000);





































// let region = 'Europe';
// let city = 'Tallinn';

// /**
//  * TODO: RENAME THE VARIABLES
//  */
// export const getRegions = () => {
//   axios.get(`http://worldtimeapi.org/api/timezone/`).then(response => {
//     let array = response.data;
//     let region;
//     let state;
//     let city;
//     array.forEach(element => {
//       console.log(element.split("/"));
//       if(element.split("/").length - 1 == 1) {
//         region = element.split("/")[0];
//         state = "No state set";
//         city = element.split("/")[1];
//       } else if(element.split("/").length - 1 == 0) {
//         region = element.split("/")[0];
//         state = "No state set";
//         city = "No city set";
//       } else {
//         region = element.split("/")[0];
//         state = element.split("/")[1]
//         city = element.split("/")[2];
//       }
//       console.log(region);
//       console.log(state);
//       console.log(city);
//     });

//     console.log
//     // let elements = response.data.forEach(element => element.split("/"));
//     // console.log(elements);
//   }).catch(error => {
//     console.log(error);
//   });
// }

// export const getData = () => {
//   axios.get(`http://worldtimeapi.org/api/timezone/${region}/${city}`).then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }
