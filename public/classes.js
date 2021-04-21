class Tile {
  
  constructor(r, c, side, txt, clr) {
    this.r = r; 
    this.c = c;
    this.side = side;
    
    this.posX = r*side;
    this.posY = c*side; 
    this.txt = txt;
    this.clr=clr;
    
  }
  
  drawCharacter() {
    fill(this.clr);
    square(this.posX, this.posY, side);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.txt, this.posX+this.side/2, this.posY+this.side/2);
    
  }
  
  isInside(x,y){
    if (x>this.posX && x<this.posX+this.side && y>this.posY && y<this.posY+this.side){
      return true;
    }
    else return false;
  }
  
  
  setTxt(txt) {
    this.txt = txt;
  }
  
  setClr(clr){
    this.clr = clr;
  }
  
}