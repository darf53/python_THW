(function() {
  "use strict";

	document.getElementById('convert').addEventListener('submit', function(event){
		
		event.preventDefault();

		const answer = document.getElementById('answer');

		const distance = parseFloat(document.getElementById('distance').value);
		

		if (distance) {

			const conversion = (distance * 1.609344).toFixed(3);
			//var roundedConversion = Math.round(conversion * 1000)/1000;
			//var roundedConversion = conversion.toFixed(3);
			//alert(conversion);

			
			answer.innerHTML= `<h2>${distance} miles converts ${conversion} kilometers</h2>`;

		}
		else {

			answer.innerHTML= `<h2>ERROR - Please provide a valid number to convert!</h2>`;

		}

	});

})();