//Grid Tile

//const { text } = require("body-parser");

//const { text } = require("body-parser");



class Tile {
  
  constructor(r, c, side, txt) {
    this.r = r; 
    this.c = c;
    this.sd = side;
    
    this.posX = r*side;
    this.posY = c*side; 
    this.txt = txt;
    this.clr=color(255,255,255);
    
  }
  
  draw_tile() {
    fill(this.clr);
    //noStroke();
    square(this.posX, this.posY, this.sd);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.txt, this.posX+this.side/2, this.posY+this.side/2);
    
  }
  
  /*isInside(x,y){
    if (x>this.posX && x<this.posX+this.side && y>this.posY && y<this.posY+this.side){
      return true;
    }
    else return false;
  }*/
  
  
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



//Exit Button class 

class ExitButton {

  constructor(rx, ry, rw, rh){
    this.rx=rx;
    this.ry=ry;
    this.rw=rw;
    this.rh=rh;
    this.enable=true;
  }


  drawExitButton() {
    loadImage(exitButtonIconPath, img => {
      image(img, this.rx, this.ry, this.rw, this.rh)
    })
  }

  isClicked(x,y){
    if(this.enable===true){
      if ((x>this.rx && x<this.rx+this.rw) && (y>this.ry && y<this.ry+this.rh)){
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
    push();
    rectMode(CENTER);
    rect(this.rx,this.ry,this.rw,this.rh);
    pop();
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




//_________________________________________________________
//ship class
class Ship {

  constructor(shipId, r, c,gridStartX, gridStartY, side, width, height){

    this.shipId = shipId;
    this.iconpath;
    this.r = r;           //place in grid (number eg. 5,2,3)
    this.c = c;
    this.side = side;
    this.width = width;     //image width
    this.height = height;  //image height
    this.gridStartX = gridStartX;
    this.gridStartY = gridStartY;

    this.posX =    this.gridStartX * side + (this.c * side);
    this.posY =    this.gridStartY * side + (this.r *side); //place in px (500px, 200px...)

  }

  drawShip(){

    switch (this.shipId) {

      case 3: 
        this.iconpath = warShipIconPath;
        break;
      case 4:
        this.iconpath = miningShipIconPath;
        break;
      case 5:
        this.iconpath = transportShipIconPath;
        break;
      case 6:
        this.iconpath = explorationShipIconPath;
        break;
      default:
        this.iconpath = emptyIconPath;
    }

    loadImage(this.iconpath, img => {
      image(img, this.posX-(this.side/5), this.posY-(this.side/5), this.width, this.height);
    })

    console.log(this.iconpath);

  }
}



//Solo Mission Class:

class SoloMissionBox {

  constructor(rx, ry, rw, rh,missionId, Name='Cargo Transport',Story, Time, InputMoney, InputPeople, InputOre, InputWater, InputShip, RewardMoney, RewardPeople, RewardOre, RewardWater , Rank='1'){
    this.rx=rx;
    this.ry=ry;
    this.rw=rw;
    this.rh=rh;
   
    
    //Mission Input
    this.missionId = missionId;
    this.name = Name;
    this.Story = Story;
    this.time = Time;
    this.InputMoney = InputMoney;
    this.InputPeople = InputPeople;
    this.InputOre = InputOre;
    this.InputWater = InputWater;
    this.InputShip = InputShip;
    this.RewardMoney = RewardMoney;
    this.RewardPeople = RewardPeople;
    this.RewardOre = RewardOre;
    this.RewardWater = RewardWater;
    this.Rank = Rank;
    
    

    //Input resources
    this.InputResource1;
    this.InputResource2;
    //input resource icons
    this.inputResource1IconPath;
    this.inputResource2IconPath;
    //input icon
    this.inputShipIconPath;

    
    //Reward resources
    this.RewardResource1;
    this.RewardResource2;
    //reward resource icons
    this.rewardResource1IconPath;
    this.rewardResource2IconPath= emptyIconPath;


    //AcceptButton
    this.acceptButton;

    this.accepted = false;
  }



  drawBox(){

    //check, which resources are there for input and Reward of the mission and change resource values and icon paths accordingly. 
    let InputArr = [this.InputMoney,this.InputPeople, this.InputOre, this.InputWater];
    let RewardArr = [this.RewardMoney, this.RewardPeople, this.RewardOre, this.RewardWater];

    
    //Assign the two Input Resources and their Icons:
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
              default:
                this.inputResource1IconPath = emptyIconPath;
                
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
              default:
                this.inputResource1IconPath = emptyIconPath;
                
            }
          } 
      }
    }

    //Assign Input Ship Icon:
    if (this.InputShip){
      switch(this.InputShip){
        case 3: 
          this.inputShipIconPath = warShipIconPath;
          break;
        case 4:
          this.inputShipIconPath = miningShipIconPath;
          break;
        case 5:
          this.inputShipIconPath = transportShipIconPath;
          break;
        case 6:
          this.inputShipIconPath = explorationShipIconPath;
          break;
        default:
          this.inputShipIconPath = emptyIconPath;
            
      }
    }



    //Assign the two Reward Resources and Icons:
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
              default:
                this.rewardResource2IconPath = emptyIconPath;
                
            }

          } else {
            this.RewardResource1 = RewardArr[i];
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
              default:
                this.rewardResource1IconPath = emptyIconPath;
                
            }
          }
      }
    }



    //Draw Frame of Mission Box
    rectMode(CENTER);
    rect(this.rx,this.ry,this.rw,this.rh);

    //____________________________________
    // Draw Mission Info and Inputs
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
    if (this.InputResource2){
      loadImage(this.inputResource2IconPath, img => {
        image(img, this.rx, this.ry+10, 12, 25)
      })
      push();
      fill('red');
      text('-'+this.InputResource2,this.rx+30, this.ry+10+25/2);
      pop();
    }
   

    //InputShip Icon and Time deployed
    loadImage(this.inputShipIconPath, img => {
      image(img, this.rx+90, this.ry-30, 22, 42)
    })
    push();
    fill('purple');
    text(this.time,this.rx+100, this.ry+10+25/2);
    pop();
    

    //Reward Resource 1
    loadImage(this.rewardResource1IconPath, img => {
      image(img, this.rx+this.rw/2-100, this.ry-40, 12, 25)
    })
    push();
    fill('green');
    text('+'+this.RewardResource1,this.rx+this.rw/2-60, this.ry-25);
    pop();


    //Reward Resource 2
    if (this.RewardResource2){
      loadImage(this.rewardResource2IconPath, img => {
        image(img, this.rx+this.rw/2-100, this.ry-10, 12, 25)
      })
      push();
      fill('green');
      text('+'+this.RewardResource2,this.rx+this.rw/2-60, this.ry);
      pop();
    }
    

    //Accept Button
    this.acceptButton = new Button(this.rx+this.rw/2-50,this.ry+30,75,30,'Accept',255,0,20);
    this.acceptButton.drawButton();
    

    //Accepted Mission changes (grey and accept button disabled)
    if(this.accepted === true){
      this.acceptButton.disable();
      push();
      fill('rgba(148,148,148, 0.7)');
      rectMode(CENTER);
      rect(this.rx, this.ry, this.rw, this.rh);
      pop();
    }

    pop();
  }

  acceptedMission(){
    this.accepted = true;
  }

}