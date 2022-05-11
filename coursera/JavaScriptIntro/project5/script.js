( function() {
  "use strict";


  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answerDiv = document.getElementById('answer');
  const form = document.getElementById('convert');

  document.addEventListener('keydown', function(){

    var key = event.code;
    
    if (key === 'KeyK' ){

      convertType = 'kilometers';
      
      //change the heading
      heading.innerHTML = "Kilometer to Miles converter";

      //change the intro paragraph
      intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.'

    }

    else if (key === 'KeyM'){

      convertType = 'miles';

      //change the heading
      heading.innerHTML = "Miles to Kilometers Converter";

      //change the intro paragraph
      intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.'

    }

  });

  form.addEventListener('submit', function(){

    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);

    if (distance){
      if (convertType === 'kilometers'){

        const conversion = (distance/1.609344).toFixed(3); 
        answerDiv.innerHTML = `<h2>${distance} km translates to ${conversion} in miles</h2>`;

      }

      else {

        const conversion = (distance * 1.609344).toFixed(3); 
        answerDiv.innerHTML = `<h2>${distance} miles translates to ${conversion} in km</h2>`;

      }

    }
    else {
      answerDiv.innerHTML= "<h2>Provide a valid number!</h2>";
    }

  });



})();