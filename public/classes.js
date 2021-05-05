
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

  constructor(rx, ry, rw, rh, Name='Cargo Transport',Story, Time, InputMoney, InputPeople, InputOre, InputWater, InputShips, RewardMoney, RewardPeople, RewardOre, RewardWater , Rank='1'){
    this.rx=rx;
    this.ry=ry;
    this.rw=rw;
    this.rh=rh;
   
    
    //Mission Input
    this.name = Name;
    this.time = Time;
    this.InputMoney = InputMoney;
    this.InputPeople = InputPeople;
    this.InputOre = InputOre;
    this.InputWater = InputWater;
    this.InputShips = InputShips;
    this.RewardMoney = RewardMoney;
    this.RewardPeople = RewardPeople;
    this.RewardOre = RewardOre;
    this.RewardWater = RewardWater;
    this.Rank = Rank;
    

    //Input resources
    this.InputResource1;
    this.InputResource2;
    //input resource icons
    this.inputResource1IconPath =  'assets/money-icon.jpg';
    this.inputResource2IconPath =  'assets/money-icon.jpg';
    
    //Reward resources
    this.RewardResource1 = +20;
    this.RewardResource2 = +30;
    //reward resource icons
    this.rewardResource1IconPath;
    this.rewardResource2IconPath;

  }



  drawBox(){

    //check, which resources are there for input and Reward of the mission and change resource values and icon paths accordingly. 
    let InputArr = [this.InputMoney,this.InputPeople, this.InputOre, this.InputWater];
    let RewardArr = [this.RewardMoney, this.RewardPeople, this.RewardOre, this.RewardWater];

    //Assign the two Input Resources:
    for (let i=0; i<InputArr.length; i++){
      if(InputArr[i]){
          if(this.InputResource1){
            this.InputResource2 = InputArr[i];

            switch (i){
              case 0: 
                this.inputResource2IconPath = moneyIconPath;
                break;
              case 1:
                this.inputResource2IconPath = peopleIconPath;
                break;
              case 2:
                this.inputResource2IconPath = oreIconPath;
                break;
              case 3:
                this.inputResource2IconPath = waterIconPath;
                break;
            }

          } else {
            this.InputResource1 = InputArr[i];

            switch (i){
              case 0: 
                this.inputResource1IconPath = moneyIconPath;
                break;
              case 1:
                this.inputResource1IconPath = peopleIconPath;
                break;
              case 2:
                this.inputResource1IconPath = oreIconPath;
                break;
              case 3:
                this.inputResource1IconPath = waterIconPath;
                break;
            }

          }
          
      }
    }

    //Assin the two Reward Resources:
    for (let i=0; i<RewardArr.length; i++){
      if(RewardArr[i]){
          if(this.RewardResource1){
            this.RewardResource2 = RewardArr[i];

            switch (i){
              case 0: 
               this.rewardResource2IconPath = moneyIconPath;
                break;
              case 1:
                this.rewardResource2IconPath = peopleIconPath;
                break;
              case 2:
                this.rewardResource2IconPath = oreIconPath;
                break;
              case 3:
                this.rewardResource2IconPath = waterIconPath;
                break;
            }

          } else {
            this.InputResource1 = InputArr[i];

            switch (i){
              case 0: 
                this.rewardResource1IconPath = moneyIconPath;
                break;
              case 1:
                this.rewardResource1IconPath = peopleIconPath;
                break;
              case 2:
                this.rewardResource1IconPath = oreIconPath;
                break;
              case 3:
                this.rewardResource1IconPath = waterIconPath;
                break;
            }
          }
      }
    }



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
    text(this.Rank, this.rx-this.rw/2+30, this.ry);
    
    //Mission Name
    fill(0);
    textSize(15);
    text(this.name,this.rx-rw/4, this.ry );


    //Input Resource 1 with icon
    loadImage(this.inputResource1IconPath, img => {
      image(img, this.rx, this.ry-30, 12, 25)
    })
    push();
    fill('red');
    text('-'+this.InputResource1,this.rx+30, this.ry-25/2);
    pop();


    //Input Resource 2 with icon
    loadImage(this.inputResource2IconPath, img => {
      image(img, this.rx, this.ry+10, 12, 25)
    })
    push();
    fill('red');
    text('-'+this.InputResource2,this.rx+30, this.ry+10+25/2);
    pop();

    //InputShip
    
  

    pop();
  }

}







