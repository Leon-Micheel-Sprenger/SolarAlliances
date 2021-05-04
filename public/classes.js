
//Grid Tile

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
    noStroke();
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

//Button class

class Button {

  constructor(x,y,width,height,txt,fillClr, txtClr, txtSize='20', corners=20){
    this.posX= x;
    this.posY= y;
    this.width= width;
    this.height= height;
    this.txt= txt;
    this.fillClr= fillClr;
    this.txtClr= txtClr;
    this.txtSize= txtSize;
    this.corners= corners;
    this.enable = true;    //used to enable and disable buttons
  }


  drawButton(){
    fill(this.fillClr);
    rect(this.posX, this.posY, this.width, this.height, this.corners);

    textAlign(CENTER, CENTER);
    textSize(this.txtSize);
    fill(this.txtClr);
    text(this.txt, this.posX, this.posY);
  }


  isClicked(x,y){
    if(this.enable===true){
      if ((x>this.posX-this.width/2 && x<this.posX+this.width/2) && (y>this.posY-this.height/2 && y<this.posY+this.height/2)){
        return true;
      }
    }
    else {
      if (this.enable === false){
        console.log('Button disabled');
      }
      return false;
    }
  }

  disable(){
    this.enable = false;
    this.txt = '';
    this.fillClr = 255;
  }

  enableButton(){
    this.enable = true;
  }


}



//OnScreen Interface

class OnScreenFrame {

  constructor(rx,ry,rw,rh){
    this.rx=rx;
    this.ry=ry;
    this.rw=rw;
    this.rh=rh;

  }

  drawScreen(){
    rectMode(CENTER);
    rect(this.rx,this.ry,this.rw,this.rh);
  }


}



//Icon / Image Class 

class Icon {

  constructor(path, rx, ry, width, height){
    this.rx = rx;
    this.ry = ry;
    this.width = width;
    this.height = height;
    this.path = path;  
    
    loadImage(this.path, img => {
        image(img, this.rx, this.ry, this.width, this.height)
      })
    
  }

}



