import { Blokje } from './blokje.js';
import { Tetrominos } from './Tetrominos.js';
let blokje = new Blokje(4, 0, Tetrominos[Math.round(Math.random() * 6)]);
let spel = document.getElementById('spel');
let rooster = Array.from({ length: 18 * 12}, () => 0);

let vorigeTijd = 0;
const SNELHEID = 10;

function lus(nu) {
  window.requestAnimationFrame(lus);
  if ((nu - vorigeTijd) < 1000 / SNELHEID) return;
  vorigeTijd = nu;
  spel.innerHTML = "";
  if (blokje.past(rooster,blokje.x,blokje.y + 1)){
    blokje.verschijn(spel);
    blokje.y++;
  } else {
    blokje.veranker(rooster);
  }
  for (let x=0; x < 12; x ++){
    for (let y =0; y < 18; y ++) {
      if (rooster[y *12 + x ]) {
      const element = document.createElement('div');
      element.style.gridColumnStart = x + 1;
      element.style.gridRowStart = y + 1;
      element.classList.add('blokje');
      spel.appendChild(element);
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


