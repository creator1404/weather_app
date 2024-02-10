const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.getElementById('description');
const humidity = document.querySelector('humidity');
const wind_speed = document.querySelector('wind-speed');

async function checkWeather(city){
    const api_key ="541329878ef1191b796bf87b1ffc6eb0";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    console.log(weather_data);
}



searchBtn.addEventListener('click' ,()=>{
    checkWeather(inputBox.value);
});





// async function checkWeather(city){
//     const api_key ="1c83f716392959f1a89af08ca603d398";
//     const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    
//      const weather_data = await fetch(`${url}`).then(response => response.json());
    

//      if(weather_data.cod ===`404`){
//         console.log("error");
//         return;
//      }
//      temperature.innerHTML= `${Math.round(weather_data.main.temp -273.15)}°C`;
//      description.innerHTML =`${weather_data.weather[0].description}`;

//      humidity.innerHTML = `${weather_data.main.humidity}%`;
//      wind_speed.innerHTML =`${weather_data.wind.speed}Km/H`;

//      switch(weather_data.weather[0].main){
//         case 'Clouds':
//             weather_img.src ="/assets/cloud and sun.png";
//             break;
//             case 'sun':
//                 weather_img.src ="/assets/sun.png"; 
                
//                 break;
//                 case 'rain':
//                 weather_img.src ="/assets/rain.png";
//                 break;  
//          }
//      console.log(weather_data);

     
// }



// searchBtn.addEventListener('click', ()=>{
//     checkWeather(inputBox.value);
// })
