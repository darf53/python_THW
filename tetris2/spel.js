import { Blokje } from './blokje.js';
import { tetrominos } from './tetrominos.js';
let volgend = Math.round(Math.random() * 6);
let voorbeeld = new Blokje(0, 0, tetrominos[volgend]);
let blokje = new Blokje(4, 0, tetrominos[Math.round(Math.random() * 6)]);
let venstertje = document.getElementById('venstertje');
voorbeeld.verschijn(venstertje);
let spel = document.getElementById('spel');
let rooster = Array.from({ length: 18 * 12 }, () => 0);
let vorigeTijd = 0;
let SNELHEID = 7;
let punten = 0;


function lus(nu) {
  window.requestAnimationFrame(lus);
  if ((nu - vorigeTijd) < 1000 / SNELHEID) return;
  vorigeTijd = nu;
  spel.innerHTML = "";

  let lijn = rooster.lastIndexOf(2);
  if (lijn != -1) {
    rooster.splice(lijn,12);
    rooster.unshift(0,0,0,0,0,0,0,0,0,0,0,0);
  }

  if (blokje.past(rooster,blokje.x,blokje.y + 1)) {
    blokje.verschijn(spel);
    blokje.y++;
  } else {
    // veranker het blokje
    punten += blokje.veranker(rooster);
    // maak volledige lijnen
    punten += blokje.maakLijnen(rooster);
    // toon de score
    score.innerText = punten;
    // maak een "nieuw" blokje
    blokje.x = 4;
    blokje.y = 0;
    blokje.vorm = tetrominos[volgend];
    volgend = Math.round(Math.random() * 6);
    venstertje.innerHTML = "";
    voorbeeld.vorm = tetrominos[volgend];
    voorbeeld.verschijn(venstertje);

  }
  for (let x=0; x < 12; x++) {
    for (let y=0; y < 18; y++) {
      if (rooster[y * 12 + x]) {
        const element = document.createElement('div');
        element.style.gridRowStart = y + 1;
        // element.innerText = rooster[y * 12 + x];
        if (rooster[y * 12 + x] === 2) {
          element.classList.add('lijn');
          spel.appendChild(element);
          break;
        } else {
          element.style.gridColumnStart = x + 1;
          element.classList.add('blokje');
          spel.appendChild(element);
        }

      }
    }
  }
}

window.requestAnimationFrame(lus);

window.addEventListener('keydown', e => {
  switch (e.key) {
    case ' ':
      e.preventDefault();
      blokje.r < 3 ? blokje.r++ : blokje.r = 0;
      while (!blokje.past(rooster)) {
        if (blokje.x>=9) blokje.x--;
        else if (blokje.x<=2) blokje.x++;
      }
      break;
    case 'ArrowRight':
      e.preventDefault();
      if (blokje.past(rooster, blokje.x + 1, blokje.y)) {
        blokje.x++;
      };
      break;
    case 'ArrowDown':
      e.preventDefault();
      if (blokje.past(rooster, blokje.x, blokje.y + 1)) {
        blokje.y++;
      };
      break;
    case 'ArrowLeft':
      e.preventDefault();
      if (blokje.past(rooster, blokje.x - 1, blokje.y)) {
        blokje.x--;
      }
      break;
  }

});


