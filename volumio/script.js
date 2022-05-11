import { volumios, radios } from './radios.js';
//import { volumios } from './radios.js';

// fetch('radios.json')
//   .then(response => response.json())
//   .then(data => {
//     //const radioslist = JSON.parse(data)
//     console.log(data);
//     //console.log(typeoff data);
//     //console.log(radiolist[0]);
//   });


// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.birth = new Date(obj.birth);

// let radios = `[
//     {
//         "name":"jef", 
//         "age":"34"
//     }, 
//     {
//         "name":"kobe", 
//         "age":"12"
//     }]`;
//let radios = '{"name":"jef", "age":"34"}';
let radiosJson = JSON.parse(radios);
//console.log(radiosJson[1]);

//Define different buttons on the screen
const btnBgColor = document.querySelector('#bgColor');
const btnVolumeUp = document.querySelector('#volumeUp');
const btnVolumeDown = document.querySelector('#volumeDown');
const btnRadioNova = document.querySelector('#radioNova');
const btnRadio1 = document.querySelector('#radio1');
const btnStuBru = document.querySelector('#stubru');

//Random number generator
function random(number) {
  return Math.floor(Math.random()*number);
}

//Function to change backgroundcolor to random color
function bgChange() {
  const rndCol = 'rgb(' + random (255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

//Function to select a specific radio station
function fncRadio(radioData) {
  var xhr = new XMLHttpRequest();
  var url = "http://192.168.0.19:3000/api/v1/replaceAndPlay";
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  console.log(xhr.status);
  xhr.onload = () => {
    console.log(xhr.status);
    if (xhr.status >= 200 && xhr.status < 300) {
      var json = JSON.parse(xhr.responseText);
      console.log(json)
      }
  };
  var data = radioData;
  console.log(data);
  xhr.send(data);
}

function fncVolumeUp() {
  var xhr = new XMLHttpRequest();
  var url = "http://192.168.0.19:3000/api/v1/commands/?cmd=volume&volume=plus";
  xhr.open('GET', url);
  console.log(xhr.status);
  xhr.send();
}

function fncVolumeDown() {
  var xhr = new XMLHttpRequest();
  var url = "http://192.168.0.19:3000/api/v1/commands/?cmd=volume&volume=minus";
  xhr.open('GET', url);
  console.log(xhr.status);
  xhr.send();
}

//Json data for different streaming radio stations
const radioNova = JSON.stringify(volumios[0]);
const radio1 = JSON.stringify(volumios[1]);
const stubru = JSON.stringify(volumios[2]);

btnBgColor.onclick = bgChange;
btnVolumeUp.onclick = fncVolumeUp;
btnVolumeDown.onclick = fncVolumeDown;

btnRadioNova.onclick = function() {
  fncRadio(radioNova);
};
btnRadio1.onclick = function() {
  fncRadio(radio1);
};

btnStuBru.onclick = function() {
  fncRadio(stubru);
};


var divContainer = document.getElementById('radios');

//console.log("radiosJson lengte", radiosJson.length);

// for (var i = 0; i< radiosJson.length; i++){

//   var imageDiv = document.createElement('div');
//   imageDiv.className="divRadios";

//   var image = document.createElement('img');
//   if (radiosJson[i].albumart != ""){
//     image.src=`${radiosJson[i].albumart}`;
//   } else {
//     image.src="images/noImage.jpeg";
//   } 

//   image.className="radioImg";
//   image.onclick = bgChange;
//   imageDiv.appendChild(image);
//   divContainer.appendChild(imageDiv);

// }

for (var i = 0; i< volumios.length; i++){

  var imageDiv = document.createElement('div');
  imageDiv.className="divRadios";

  var image = document.createElement('img');
  if (volumios[i].albumart != ""){
    image.src=`${volumios[i].albumart}`;
  } else {
    image.src="images/noImage.jpeg";
  } 

  image.className="radioImg";
  //console.log(JSON.stringify(volumios[i]));
  //image.onclick = fncRadio(JSON.stringify(volumios[i]))

  imageDiv.appendChild(image);
  divContainer.appendChild(imageDiv);

}