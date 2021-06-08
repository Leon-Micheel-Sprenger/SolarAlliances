
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
  
  draw_tile() {
    push();
    fill(this.clr);
    //noStroke();
    square(this.posX, this.posY, side);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.txt, this.posX+this.side/2, this.posY+this.side/2);
    pop();
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
    this.borderClr = 'rgb(0,0,0)'; 
  }


  drawButton(){
    push();
    fill(this.fillClr);
    stroke(this.borderClr);
    rect(this.posX, this.posY, this.width, this.height, this.corners);
    pop();
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

  setBorderClr(clr){
    this.borderClr = clr;
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

    this.backBtn = new Button(this.rx-this.rw/2+22.5,this.ry-this.rh/2+15,45,30,'Back',0,255, 0, 0);

  

  }

  drawScreen(){
    rectMode(CENTER);
    rect(this.rx,this.ry,this.rw,this.rh);
  }

  drawPageArrows(){

    loadImage(arrowLeft, img => {
      push();
      imageMode(CENTER);
      image(img, this.rx-this.rw/14, this.ry+this.rh/2.5, 50, 50);
      pop();
    })

    loadImage(arrowRight, img => {
      push();
      imageMode(CENTER);
      image(img, this.rx+this.rw/18, this.ry+this.rh/2.5, 50, 50);
      pop();
    })

    push();
    fill(0);
    text(`${pageEnabled}`, this.rx+this.rw/2-30, this.ry+this.rh/2.3  )
    pop();
  }

  arrowLeftIsClicked(x,y){
    let d= dist(x, y, this.rx-this.rw/14, this.ry+this.rh/2.5);

    if (d<25){
      return true;
    }
    
  }


  arrowRightIsClicked(x,y){
    let d= dist(x, y, this.rx+rw/18, this.ry+this.rh/2.5);

    if (d<25){
      return true;
    }
    
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

  constructor(ship_Fleet_ID, Ship_on_Mission, Ship_UnderRepair, Ship_Health, Ship_Under_Construction, shipId, r, c,gridStartX, gridStartY, side, width, height, shipOnMissionIconPath){


    this.ship_Fleet_ID = ship_Fleet_ID;
    this.Ship_on_Mission = Ship_on_Mission;
    this.Ship_UnderRepair = Ship_UnderRepair;
    this.Ship_Health = Ship_Health;
    this.Ship_Under_Construction = Ship_Under_Construction;
    this.shipId = shipId;

    this.iconpath;
    this.r = r;           //place in grid (number eg. 5,2,3)
    this.c = c;
    this.side = side;     //side of the tile
    this.width = width;     //image width
    this.height = height;  //image height
    this.gridStartX = gridStartX;
    this.gridStartY = gridStartY;
    this.available = true;
    this.shipOnMissionIconPath = shipOnMissionIconPath;
    this.removeImages = true;

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


  if (this.available === false) {
    loadImage(this.shipOnMissionIconPath, img2 => {
      image(img2, this.posX-this.side/2, this.posY-this.side/2, 20, 25);
    }) 
  }
    
}

  blockShip(){
    this.available = false;
  }

  unblockShip(){
    this.available = true;
  }

  removeImages(){
    img.remove();
    img2.remove();
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
    this.InputShip = InputShip;           //Ship Id
    this.RewardMoney = RewardMoney;
    this.RewardPeople = RewardPeople;
    this.RewardOre = RewardOre;
    this.RewardWater = RewardWater;
    this.Rank = Rank;
    
    

    //Input resources
    this.InputResource1;
    this.InputResource2;

    this.InputResource1Name;
    this.InputResource2Name;
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
          if(this.InputResource1 && InputArr[i] !== this.InputResource1){
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
          if(this.RewardResource1 && RewardArr[i] !== this.RewardResource1){
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




//__________________________________________________________________________
//Multiplayer Missions

class MultipiplayerMission  {

  constructor(rx, ry, page, rw, rh,missions_Id, Name, Story, Time, InputShipId, RewardWater, RewardPeople, RewardOre, RewardMoney, InputWater, InputPeople, InputOre, InputMoney, ShipAmount, Minimum_Water, Minimum_Money, Minimum_People, Minimum_Ore, Submitted_Ore, Submitted_Water, Submitted_People, Submitted_Money, Submitted_Ships, Rank, Faction){
    this.rx=rx;
    this.ry=ry;
    this.page = page;
    this.rw=rw;
    this.rh=rh;


    //Mission Input
    this.missions_Id = missions_Id;
    this.name = Name;
    this.Story = Story;
    this.time = Time;
    this.InputMoney = InputMoney;
    this.InputPeople = InputPeople;
    this.InputOre = InputOre;
    this.InputWater = InputWater;
    this.InputShipId = InputShipId;           
    this.RewardMoney = RewardMoney;
    this.RewardPeople = RewardPeople;
    this.RewardOre = RewardOre;
    this.RewardWater = RewardWater;
    this.Rank = Rank;
    this.MinMoney = Minimum_Money;
    this.MinWater = Minimum_Water;
    this.MinOre = Minimum_Ore;
    this.MinPeople = Minimum_People;
    this.ShipAmount = ShipAmount;           //number of ships needed!
    this.SubmittedOre = Submitted_Ore;
    this.SubmittedWater = Submitted_Water;
    this.SubmittedPeople = Submitted_People;
    this.SubmittedMoney = Submitted_Money;
    this.SubmittedShips = Submitted_Ships;
    this.Faction = Faction;


    this.openBtn = new Button(this.rx,this.ry+this.rh/4,85,30,'Open',0,255,20) ;
    this.openBtnEnable = false;
    this.openContributionBtn = new Button(width*0.5, height*0.35, 200, 40, 'Contribute to this Mission', 0, 255, 15, 20);

    this.contributeToMissionBtn;
    

    this.factionImagePath1;
    this.factionImagePath2;
    this.factionImagePath3;

    this.open = false;

    //maximum of 1 input resource and 2 reward resources can be granted. 

    this.InputResource; 
    this.inputResourceIconPath; 

    this.RewardResource1;
    this.rewardResource1IconPath;

    this.RewardResource2;
    this.rewardResource2IconPath;

    this.inputShipIconPath;

    this.SubmittedResource;

    this.MinResource;


    //Contribution Variables

    this.contributeMoney = 0;
    this.contributePeople = 0;
    this.contributeWater = 0;
    this.contributeOre = 0;


    //Accepted Status
    this.acceptedStatus = false;
    this.status;
    
   




  // assign faction symbols based on the input given:

  switch(this.Faction){
    case 'MEB':
      this.factionImagePath1 = marsIconPath;
      this.factionImagePath2 = earthIconPath;
      this.factionImagePath3 = beltIconPath;
      break;
    case 'M':
      this.factionImagePath1 = emptyIconPath;
      this.factionImagePath2 = marsIconPath;
      this.factionImagePath3 = emptyIconPath;
      break;
    case 'B':
      this.factionImagePath1 = emptyIconPath;
      this.factionImagePath2 = beltIconPath;
      this.factionImagePath3 = emptyIconPath;
      break;
    case 'E':
      this.factionImagePath1 = emptyIconPath;
      this.factionImagePath2 = earthIconPath;
      this.factionImagePath3 = emptyIconPath;
      break;
    case 'ME':
      this.factionImagePath1 = marsIconPath;
      this.factionImagePath2 = emptyIconPath;
      this.factionImagePath3 = earthIconPath;
      break;
    case 'MB':
      this.factionImagePath1 = marsIconPath;
      this.factionImagePath2 = emptyIconPath;
      this.factionImagePath3 = beltIconPath;
      break;
    case 'EB':
      this.factionImagePath1 = earthIconPath;
      this.factionImagePath2 = emptyIconPath;
      this.factionImagePath3 = beltIconPath;
      break;

  }

   //_________________________________________________________________________
   //check, which resources are there for input and Reward of the mission and change resource values and icon paths accordingly. 
   let InputArr = [this.InputMoney,this.InputPeople, this.InputOre, this.InputWater];
   let RewardArr = [this.RewardMoney, this.RewardPeople, this.RewardOre, this.RewardWater];
   let SubmittedArr = [this.SubmittedMoney, this.SubmittedPeople, this.SubmittedOre, this.SubmittedWater];
   let MinArr = [this.MinMoney, this.MinPeople, this.MinOre, this.MinWater];



   //Assign the Input Resource and  Icons:
   for (let i=0; i<InputArr.length; i++){
    if(InputArr[i]){
        
          this.InputResource = InputArr[i];

          switch (i){
            case 0: 
              this.inputResourceIconPath = moneyIconPath;
              break;
            case 1:
              this.inputResourceIconPath = peopleIconPath;
              break;
            case 2:
              this.inputResourceIconPath = oreIconPath;
              break;
            case 3:
              this.inputResourceIconPath = waterIconPath;
              break;
            default:
              this.inputResourceIconPath = emptyIconPath;
              
          }
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


     //Assign Input Ship Icon:
     if (this.InputShipId){
      switch( this.InputShipId){
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

    //Assign Submitted Resources;
    for(let i=0; i<SubmittedArr.length; i++){
      if (SubmittedArr[i]){
        this.SubmittedResource = SubmittedArr[i];
      }
    }
    if (!this.SubmittedResource){
      this.SubmittedResource = 0;
    }


    //Assiging Minimum Resource;
    for(let i=0; i<MinArr.length; i++){
      if (MinArr[i]){
        this.MinResource = MinArr[i];
      } 
    }
    if (!this.MinResource){
      this.MinResource = 0;
    }
}




drawMission() {
  //Draw Mission Cards
  push();
  if (this.page === pageEnabled){
  
  push();
  strokeWeight(2);
  fill('rgb(186, 170, 101)');
  rectMode(CENTER);
  rect(this.rx, this.ry, this.rw, this.rh);
  fill(0);
  textAlign(CENTER, CENTER);
  
  textSize(20);
  textStyle(BOLD);
  text(`${this.name}`,this.rx, this.ry -(this.rh/3), this.rw*0.8, this.rh)
  pop();


  //draw faction symbols

  loadImage(this.factionImagePath1, img => {
    push();
    imageMode(CENTER);
    image(img, this.rx-this.rw/3, this.ry, 35, 25);
    pop();
  })

  loadImage(this.factionImagePath2, img => {
    push();
    imageMode(CENTER);
    image(img, this.rx, this.ry, 35, 25);
    pop();
  })

  loadImage(this.factionImagePath3, img => {
    push();
    imageMode(CENTER);
    image(img, this.rx+this.rw/3, this.ry, 35, 25);
    pop();
  })


  //Draw Open Button
  push();
  this.openBtn.drawButton();
  this.openBtnEnable = true;
  pop();

  if (this.acceptedStatus === true){
    push();
    
    if (this.status === 2){
      textSize(12);
      stroke('rgba(97, 237, 114, 1)');
      text(`Waiting for Submissions`, this.rx, this.ry+this.rh/2.5 )
    }
    else if (this.status === 1){
      stroke('rgba(218, 66, 245, 1)');
      text(`${this.time}`, this.rx, this.ry+this.rh/2.5 )
    }
    fill(255, 70);
    strokeWeight(8);
    rect(this.rx, this.ry, this.rw, this.rh);
    pop();
  }

  }
pop();
}





drawOpenMission(x, y, width, height){
  
push();
  //draw box
  
  strokeWeight(1);
  rectMode(CENTER);
  fill(255);
  rect(x, y+height/6, width*0.9, height*0.6);
  strokeWeight(2);
  line(x, y-height/10, x, y+ height/2.5 );
  


  //create and draw Button
  if (this.acceptedStatus === false){
  push();
  this.openContributionBtn.setBorderClr('rgb(160, 204, 102)')
  strokeWeight(5)
  this.openContributionBtn.drawButton();
  console.log('draw button');
  pop();
  }
  else if (this.acceptedStatus === true){
    push();
    fill('green');
    textStyle(BOLD);
    text('This mission has already been accepted by you!',x, y-height/6);
    pop();
  }


  push();
  textSize(20);
  textStyle(BOLD);
  fill('purple');
  text(`${this.time}`,x, y-height/4.5 );
  pop();



  //draw Submitted Resources
  
  fill(0)
  text('Submitted Resources', x-width/4, y-y/6);

  
  loadImage(this.inputResourceIconPath, img => {
    push();
    imageMode(CENTER);
    image(img, x-width/2.7, y, 40, 64);
    pop();
  })
  fill(0);
  text(`${this.SubmittedResource}`,x-width/2.7+80, y);
  console.log(this.SubmittedResource);


  loadImage(this.inputShipIconPath, img => {
    push();
    imageMode(CENTER);
    image(img, x-width/2.7, y+height/10, 40, 64);
    pop();
  })
  fill(0);
  text(''+this.SubmittedShips,x-width/2.7+80, y+height/10);

  


  //draw Required Resources
  
  fill(0);
  text('Required Resources', x+width/4, y-y/6 );

  loadImage(this.inputResourceIconPath, img => {
    push();
    imageMode(CENTER);
    image(img, x+width/10, y, 40, 64);
    pop();
  })
  fill(0);
  text(this.InputResource,x+width/10+80, y);

  loadImage(this.inputShipIconPath, img => {
    push();
    imageMode(CENTER);
    image(img, x+width/10, y+height/10, 40, 64);
    pop();
  })
  fill(0);
  text(''+this.ShipAmount,x+width/10+80, y+height/10);

  

 


  //draw Reward Resources
  
  fill(0);
  text('Reward for Each Player', x+width/4, y+y/2.8 );

  loadImage(this.rewardResource1IconPath, img => {
    push();
    imageMode(CENTER);
    image(img, x+width/10, y+height/3.5, 40, 64);
    pop();
  })
  fill('green');
  textStyle(BOLD);
  text('+'+this.RewardResource1,x+width/10+80, y+height/3.5);

  loadImage(this.rewardResource2IconPath, img => {
    push();
    imageMode(CENTER);
    image(img, x+width/10, y+height/2.7, 35, 58);
    pop();
  })
  fill('green');
  textStyle(BOLD);
  text('+'+this.RewardResource2,x+width/10+80, y+height/2.7);

  

  
  //Draw Minimum Contribution
  
  fill(0);
  textStyle(NORMAL);
  text('Minimum Contribution', x-width/4, y+y/2.8 );

  loadImage(this.inputResourceIconPath, img => {
    push();
    imageMode(CENTER);
    image(img, x-width/2.7, y+height/3.5, 40, 64);
    pop();
  })
  fill(0);
  textStyle(BOLD);
  text(this.MinResource,x-width/2.7+80, y+height/3.5);


  loadImage(this.inputShipIconPath, img => {
    push();
    imageMode(CENTER);
    image(img, x-width/2.7, y+height/2.7, 40, 64);
    pop();
  })
  fill(0);
  textStyle(BOLD);
  text('1',x-width/2.7+80, y+height/2.7);

 

pop();
  
}

drawContribution(x, y, width, height){
  push();
  strokeWeight(1);
  rectMode(CENTER);
  fill(255);
  rect(x, y+height/6, width*0.9, height*0.6);
  strokeWeight(2);
 
  if (this.acceptedStatus === false){
  this.contributeToMissionBtn = new Button(x, y+height/2.5, 200, 40, 'Contribute Resources!', 0, 255, 15, 20);
  this.contributeToMissionBtn.drawButton();
  }
  else if (this.acceptedStatus === true){
    push();
    this.contributeToMissionBtn.disable();
    fill('green');
    textStyle(BOLD);
    text('Mission Accepted', x, y+height/2.5);
    pop();
  }




  fill(0)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(20);
  text('Are you sure, you want to contribute to this Multiplayer Mission?', x, y-y/6);
  textSize(15);
  text('If you click Contribute Resources, the following Resources and Ships will be commited to this Mission. You wont be able to use your ship until this Multiplayer Mission is finished.', x, y+y/8, width*0.7, height);
  fill('red');
  text(`NOTE, that the ${this.time} minutes will only start, after 100% of the required resources have been submitted by players`, x, y+height/4, width*0.7, height)
  pop();
}


acceptMission(status){
  this.acceptedStatus = true;
  this.openContributionBtn.disable();
  this.status = status;
}

}
