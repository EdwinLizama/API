//Edwin Daniel Lizama Garcia Lg20012

const API_KEY = 'b1b7b1eeba500198f454f217b71d3a54';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

let icono = document.getElementById('icono');
let departamento = document.getElementById('depa');
let clima = document.getElementById('clima');
let temperatura = document.getElementById('temperatura');
let opcion = document.getElementById('depart');

let departamentos = [];



const lat = [13.68935, 13.99417, 13.48333, 13.71889, 13.63333, 13.35, 14.03333, 13.33694, 13.9214, 13.4883, 13.8333, 13.4667, 13.8667, 13.8];
const lon = [-89.18718, -89.55972, -88.18333, -89.72417, -88.8, -88.45, -88.93333, -87.84389, -89.845, -89.3222, -89.0333, -88.9833, -88.75, -88.1];

const getWeather = async (lat, lon) => {
  axios({
      method: 'GET',
      url: `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  }).then(res=>{
      departamentos.push(res.data);
      return res.data;

  })
};

for (let i=0; i<departamentos.length; i++){
  getWeather(lat[i], lon[i]);
}

let d1 = document.getElementById('d1'); 
let d2 = document.getElementById('d2'); 
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');
let d5 = document.getElementById('d5');
let d6 = document.getElementById('d6');
let d7 = document.getElementById('d7');
let d8 = document.getElementById('d8');
let d9 = document.getElementById('d9');
let d10 = document.getElementById('d10');
let d11 = document.getElementById('d11');
let d12 = document.getElementById('d12');
let d13 = document.getElementById('d13');
let d14 = document.getElementById('d14');

let op = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14];



opcion.addEventListener('click', (e)=>{
  let depa = e.target.value;
  let depaInfo = departamentos[depa]; 
  let icon = depaInfo.weather[0].icon;
  icono.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;//cambia el icono

  departamento.innerHTML = depaInfo.name; //cambia el nombre del departamento
  clima.innerHTML = depaInfo.weather[0].description; //cambia el clima
  temperatura.innerHTML = depaInfo.main.temp; //cambia la temperatura
  

} );





