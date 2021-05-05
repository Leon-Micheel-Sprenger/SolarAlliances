
//Grid Tile

//const { text } = require("body-parser");

//const { text } = require("body-parser");



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


//Solo Mission Class:

class SoloMissionBox {

  constructor(rx, ry, rw, rh, missionName='Cargo Transport',missionStory, missionTime,InputResource1=-20,Resource1IconPath='assets/money-icon.jpg', InputResource2=-30,Resource2IconPath='assets/money-icon.jpg', InputShip, Reward1, Reward2, missionRank='1'){
    this.rx=rx;
    this.ry=ry;
    this.rw=rw;
    this.rh=rh;
   
    
    //Mission Input
    this.name = missionName;
    this.rank= missionRank;
    this.InputResource1= InputResource1;
    this.InputResource2 = InputResource2;
    this.InputShip = InputShip;
    this.Resource1IconPath=Resource1IconPath;
    this.Resource2IconPath=Resource2IconPath;
    this.time = missionTime;
    this.story = missionStory;

  }



  drawBox(){

    //Draw Frame of Box
    rectMode(CENTER);
    rect(this.rx,this.ry,this.rw,this.rh);

    // Mission Info and Inputs
    push();

    //Rank
    fill(0);
    rect(this.rx-this.rw/2+30, this.ry, 40, 60);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.rank, this.rx-this.rw/2+30, this.ry);
    
    //Mission Name
    fill(0);
    textSize(15);
    text(this.name,this.rx-rw/4, this.ry );


    //Input Resource 1
    loadImage(this.Resource1IconPath, img => {
      image(img, this.rx, this.ry-30, 12, 25)
    })
    push();
    fill('red');
    text(this.InputResource1,this.rx+30, this.ry-25/2);
    pop();


    //Input Resource 2
    loadImage(this.Resource2IconPath, img => {
      image(img, this.rx, this.ry+10, 12, 25)
    })
    push();
    fill('red');
    text(this.InputResource2,this.rx+30, this.ry+10+25/2);
    pop();
  

    pop();
  }

}







