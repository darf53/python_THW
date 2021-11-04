class Blokje {
  constructor(x=0, y=0, vorm, rotatie=0){
    this.x = x;
    this.y = y;
    this.vorm = vorm || [
      0, 1, 0, 0,
      0, 1, 0, 0,
      0, 1, 1, 0,
      0, 0, 0, 0,
    ];
    this.r = rotatie;
  }

  index(x,y) {
    switch (this.r) {
      case 0: return y * 4 + x;
      case 1: return 12 + y - (x *4);
      case 2: return 15 - (y * 4) - x;
      case 3: return 3 - y + (x * 4);
    };
    return 0;
  }

  verschijn(spel) {
    for (let x=0; x < 4; x++) {
      for (let y=0; y < 4; y++) {
        if (this.vorm[this.index(x,y)]) {
          const element = document.createElement('div');
          element.style.gridColumnStart = this.x + x + 1;
          element.style.gridRowStart = this.y + y + 1;
          element.classList.add('blokje');
          spel.appendChild(element);
        }
      }
    }
  }

  veranker(rooster){
    for (let x=0; x < 4; x++){
      for (let y = 0; y < 4; y++){
        if (this.vorm[this.index(x,y)]) {
          rooster[(this.y + y) * 12 + (this.x + x)] = 1;
        }
      }
    }
  }
  
  past(rooster,x=this.x,y=this.y) {
    for (let bx=0; bx < 4; bx++) {
      for (let by=0; by < 4; by++) {
        if (this.vorm[this.index(bx,by)]) {
          if (rooster[(y + by) * 12 + (x + bx)] != 0) {
            return false;
          }
          if (x + bx + 1 < 1 || x + bx + 1 > 12
            || y + by + 1 < 1 || y + by + 1 > 18) {
            return false;
          }
        }
      };
    };
    return true;
  }
}
export { Blokje };