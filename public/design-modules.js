
// In here, we are storing all available front end components and designs of p5. 
// To find other functions and executing commands, go to function-modules.js
let cur_status = 'status_login'; //status_login, status_register, status_play




//Global Variables:

//Resource Icon paths
let moneyIconPath = 'assets/money-icon.jpg';
let oreIconPath = 'assets/money-icon.jpg';
let waterIconPath = 'assets/money-icon.jpg';
let peopleIconPath = 'assets/money-icon.jpg';
let rankIconPath = 'assets/money-icon.jpg';
let emptyIconPath = 'assets/money-icon.jpg';

//Ship Icon Paths
let transportShipIconPath =  'assets/money-icon.jpg';
let miningShipIconPath =  'assets/money-icon.jpg';
let warShipIconPath =  'assets/money-icon.jpg';
let explorationShipIconPath =  'assets/money-icon.jpg';

//Other paths
let exitButtonIconPath = 'assets/exit-icon.jpg';




//_____________________________________________________________________
//Creating the Grid for the main menu. 
//Grid variables
/*let tilesArr= [];
let gridStartX=0;
let gridStartY=0;
let side = 100;
let gridX = window.innerWidth/side;    //length of the grid
let gridY = window.innerHeight/side;   // height of the grid

function createGrid(){
  for (r=gridStartX; r<gridX+gridStartX;r++){
    tilesArr[r]= [];
    for(c=gridStartY; c<gridY+gridStartY; c++){
      tilesArr[r][c] = new Tile (r, c, side,txt=``,255);    //to let tile numbers appear, insert into txt: ${r},${c} 
    } 
  } 
}

function drawGrid(){
  for (r=gridStartX; r<gridX+gridStartX;r++)
    for(c=gridStartY; c<gridY+gridStartY; c++){
      tilesArr[r][c].drawCharacter();
  }
}*/






//______________________________________________
//Creating Login Interface
//Login Variables: 
let loginFrame;
let registerBtn;
let loginBtn;
let InputName;
let InputPass;




function loginScreen(){
  
  rx= width*0.5;
  ry= height*0.5;
  rw= 600;
  rh= 500;
  
  //Login Screen Frame, Title and Description

  if(cur_status=== 'status_login'){

  loginFrame = new OnScreenFrame(rx,ry,rw,rh)
  loginFrame.drawScreen();
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Login or Register", rx, ry-rh/2.2);
  textAlign(CENTER);
  textSize(15);
  text("Welcome to Solar Alliances. Please login into your existing account.",rx, ry-rh/3 )
  text("Or register as a new User, if you don't have an account.",rx, ry-rh/4 )
  

  //Create Buttons
  loginBtn = new Button(rx,ry+80,300,50,'Login',0,255,20);
  registerBtn = new Button(rx,ry+130,120,30,'Register as new Player',255,0,10);
  

  InputName = createInput('Name').position(rx-100, ry-60);
  InputPass = createInput('Password').position(rx-100, ry);
  
   //Draw Buttons
   rectMode(CENTER);
   loginBtn.drawButton();
   registerBtn.drawButton();

  } 
 
}


//_________________________________________________
//Creating and drawing Register Screen
//Variables
let InputPassTwo;
let InputEmail;
let registerFrame;
let submitRegisterBtn;

function registerScreen(){
  
  if(cur_status==='status_register'){
    	
    rx= width*0.5;
    ry= height*0.5;
    rw= 600;
    rh= 500;   

    InputPassTwo = createInput('Repeat Password').position(rx-100, ry+30);
    InputEmail = createInput('Email').position(rx-100, ry-30);
    

    //disable Loginbutton and Register player button
    loginBtn.disable();
    registerBtn.disable();
    fill(255);
    noStroke();
    rect(rx, ry+100, 310, 100);
    
    submitRegisterBtn = new Button(rx,ry+200,300,50,'Register',0,255,20);
    submitRegisterBtn.drawButton();
    console.log(cur_status);
  }
}





//__________________________________________________
//Creating and drawing main Menu.
//Variables:
let gameStatus= false;

function createGame(){

  gameStatus = true;
  cur_status = 'status_play';
  InputName.remove();
  InputPass.remove();
  background(220);
  
  createResourceBar();
  createButtons();
  //createGrid();
  //drawGrid();
  
}



//_________________________
//Creating and Drawing Main Menu Buttons
//Variables:
let missionButton;
let stationButton;
let shipFleetButton;
let marketplaceButton;


function createButtons(){
  missionButton = new Button(width-200,200,200,50,'Missions',0,255,20);
  missionButton.drawButton();

  //btn for the ship yard
  shipFleetButton = new Button(width-1250,850,200,50,'Ship Fleet',0,255,20);
  shipFleetButton.drawButton();

  //btn for the station upgrades
  stationButton = new Button(width-1550,850,200,50,'Station Upgrades',0,255,20);
  stationButton.drawButton();
}





//_____________________________________
// Creating and drawing Resource Bar
//Variables:
let barFrame;
let moneyIcon;
let oreIcon;
let waterIcon;
let peopleIcon;
let rankIcon;
let gameDate;

let money;
let ore;
let water;
let people;
let rank;

let max_ore;
let max_water;
let max_people;


function createResourceBar(){
  if (gameStatus){
    rx=width-650/2;
    ry=20;
    rw=660;
    rh= 50;
  
    //create bar frame
    fill(255);
    barFrame= new OnScreenFrame(rx, ry, rw, rh);
    barFrame.drawScreen();
    
    // create Icons
    moneyIcon = new Icon(moneyIconPath, rx-rw/2+5, ry-rh/3, 20, 32 );
    waterIcon = new Icon(waterIconPath, rx-rw/2+95, ry-rh/3, 20, 32 );
    oreIcon = new Icon(oreIconPath, rx-rw/2+195, ry-rh/3, 20, 32 );
    peopleIcon = new Icon(peopleIconPath, rx-rw/2+295, ry-rh/3, 20, 32 );
    rankIcon = new Icon(rankIconPath, rx-rw/2+495, ry-rh/3, 20, 32 );

  }
 
}


//Draw Resource-Values in Resourcebar
function drawResourceValues(){
  if (gameStatus){

   //Resource bar Coordinates;
    rx=width-650/2;
    ry=20;
    rw=660;
    rh= 50;

  push();

  fill(0);
  textSize(12);
  text(`${money}`,(rx-rw/2+5)+40, ry+5);
  text(`${water}/${max_water}`,(rx-rw/2+5)+140, ry+5);
  text(`${ore}/${max_ore}`,(rx-rw/2+5)+240, ry+5);
  text(`${people}/${max_people}`,(rx-rw/2+5)+340, ry+5);
  text(`${rank}`,rx-rw/2+520, ry+5);
  text(`Year: ${gameDate}`,rx-rw/2+595, ry+5);

  pop();

  }
}





//________________________________
// Creating and drawing Missions Interface 
 //enables or disables interface
let missionFrame;
let singleMissionsBtn;
let multiMissionsBtn;
let runningMissionsBtn;
let missionRespawnTimer;
let missionExitBtn;




//Mission Frame Variables:


let singlemission1;
let singlemission2;
let singlemission3;
let singlemission4;
let singlemission5;

let singleMissionsArr = [];

//Mission1 Variables; 
let singlemissionName;
let singlemissionStory;
let singlemissionTime;
let singlemissionInputMoney;
let singlemissionInputPeople;
let singlemissionInputOre;
let singlemissionInputWater;
let singlemissionInputShips;
let singlemissionRewardMoney;
let singlemissionRewardPeople;
let singlemissionRewardOre;
let singlemissionRewardWater;
let singlemissionRank;
let singlemissionAcceptBtn;


//Missions Interface
 function createMissionInterface(){

    rx= width*0.5;
    ry= height*0.5;
    rw= 700;
    rh= 750;

    //Frame, title and buttons of Mission Interface;
    missionFrame = new OnScreenFrame(rx, ry, rw, rh);
    missionFrame.drawScreen();

    singleMissionsBtn = new Button(rx-rx/2+220,ry-rh/2+75,250,50,'Single Player Missions',0,255,20)
    singleMissionsBtn.drawButton();

    multiMissionsBtn = new Button(rx+150,ry-rh/2+75,250,50,'Collaborative Missions',0,255,20)
    multiMissionsBtn.drawButton();

    runningMissionsBtn = new Button(rx+150,ry+(rh/2-50),250,50,'Running Missions',0,255,20);
    runningMissionsBtn.drawButton();

    missionExitBtn = new ExitButton(rx+rw/2-30, ry-rh/2,30,30);
    missionExitBtn.drawExitButton();

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Missions", rx, ry-rh/2.2);

    




    //___________________________________________________________________
    //Mission boxes and Input; (all of the same mission at this point)

    //create new missions in singleMissionsArr
 

    singlemission1 = new SoloMissionBox(rx, ry-(rh/4), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission2 = new SoloMissionBox(rx, ry-(rh/4-100), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission3 = new SoloMissionBox(rx, ry-(rh/4-200), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission4 = new SoloMissionBox(rx, ry-(rh/4-300), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission5 = new SoloMissionBox(rx, ry-(rh/4-400), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);

    singleMissionsArr = [singlemission1, singlemission2, singlemission3, singlemission4, singlemission5];
   
    push()
    fill(255);
    stroke(5);
    singlemission1.drawBox();
    singlemission2.drawBox();
    singlemission3.drawBox();
    singlemission4.drawBox();
    singlemission5.drawBox();
    pop();
    
}





//_____________________________________________________
//Accepting a Solo Mission!

function acceptSoloMission(missionNumber){
  
  //Deduct resources of the mission from player resources
  //block ship for use for the amount of time the mission takes! (change status of ship)
  //update player resources and ship on database

  
  //remove accepted mission and put it into accepted missions
  //send update to database
  




  
}
//_________________________________________________________________________________________________
//ship fleet grid
let tilesArr= [];
let gridStartX= 7.6;
let gridStartY= 9.5;
let side = 100;
let gridX = 5;    //length of the grid
let gridY = 1;   // height of the grid

/*function createGrid(){
  for (let r=gridStartX; r<gridX+gridStartX; r++){
    tilesArr[r]=[];
    if(r==0){
      gridStartX=100;
    }else{
      gridStartX=gridStartX+side;
    }
    for(let c=gridStartY; c<gridY+gridStartY; c++){
      if(c==0){
        gridStartY=600;
      }else{
        gridStartY=gridStartY+side;
      }
      tilesArr[r][c] = new Tile(r, c, side, 255);    //to let tile numbers appear, insert into txt: ${r},${c} 
    } 
  } 
}*/


let shipId=[];

function createGrid(){
  for (r=gridStartX; r<gridX+gridStartX;r++){
    tilesArr[r]= [];
    for(c=gridStartY; c<gridY+gridStartY; c++){
      tilesArr[r][c] = new Tile (r, c, side, txt='');    //to let tile numbers appear, insert into txt: ${r},${c} 
    } 
  } 
}

function drawGrid(){
  for (let r=gridStartX; r<gridX+gridStartX; r++)
    for(let c=gridStartY; c<gridY+gridStartY; c++){
      tilesArr[r][c].draw_tile();
  }
}

function shiponsqr(){ 
  if(shipId.length == 1){
    tilesArr[0][0].clr=color(0, 0, 255);
  /*}else if(shipId.length == 2){
    tilesArr[0][0].clr=color(0, 0, 255);
    tilesArr[1][0]=changesquareclr();
  }else if(shipId.length == 3){
    tilesArr[0][0].clr=color(0, 0, 255);
    tilesArr[1][0]=changesquareclr();
    tilesArr[2][0]=changesquareclr();
  }else if(shipId.length == 4){
    tilesArr[0][0].clr=color(0, 0, 255);
    tilesArr[1][0]=changesquareclr();
    tilesArr[2][0]=changesquareclr();
    tilesArr[3][0]=changesquareclr();
  }else if(shipId.length == 5){
    tilesArr[0][0].clr=color(0, 0, 255);
    tilesArr[1][0]=changesquareclr();
    tilesArr[2][0]=changesquareclr();
    tilesArr[3][0]=changesquareclr();
    tilesArr[4][0]=changesquareclr();*/
  }
}

let shipclr=[];

//give the shipId a color
function changesquareclr(){
  if (shipId == 3){
    shipclr[0]=color(255, 0, 0);
  }else if (shipId == 4){
    shipclr[1]=color(0, 255, 0);
  }else if (shipId == 5){
    shipclr[2]=color(0, 0, 255);
  }else if (shipId == 6){
    shipclr[3]=color(20, 30, 40);
  }else{
    tilesArr[r][c].clr=color(0, 0, 0);
  }
}

function tryitsnotworking(){
  if (tilesArr[0][0]==shipId[0]){
    tilesArr[r][c].clr=shipclr[2]
  }
}

let shipfleetFrame;
let shipfleetExitBtn;
let buildWarshipBtn;
let buildTransportshipBtn;
let buildMiningtshipBtn;
let buildExplorationshipBtn;

function createShipFleetInterface(){
  rx= width*0.5;
  ry= height*0.5;
  rw= 700;
  rh= 750;

  shipfleetFrame = new OnScreenFrame(rx, ry, rw, rh);
  shipfleetFrame.drawScreen();

  shipfleetExitBtn = new ExitButton(rx+rw/2-30, ry-rh/2,30,30);
  shipfleetExitBtn.drawExitButton();

  buildWarshipBtn = new Button(rx-rx/2+270,ry+(rh/2-110),250,50,'Build War Ship',0,255,20)
  buildWarshipBtn.drawButton();

  buildTransportshipBtn = new Button(rx+200,ry+(rh/2-110),250,50,'Build Transport Ship',0,255,20)
  buildTransportshipBtn.drawButton();

  buildMiningtshipBtn = new Button(rx+200,ry+(rh/2-50),250,50,'Build Mining Ship',0,255,20);
  buildMiningtshipBtn.drawButton();

  buildExplorationshipBtn = new Button(rx-rx/2+270,ry+(rh/2-50),250,50,'Build Exploration Ship',0,255,20);
  buildExplorationshipBtn.drawButton();

  //createGrid();
  //drawGrid();
}

function createships(){
  //create ships
  //reduce layer resources
  //update player resources database
}

let stationFrame;
let stationExitBtn;

function createStationUpgradesInterface(){
  rx= width*0.5;
  ry= height*0.5;
  rw= 700;
  rh= 750;

  stationFrame = new OnScreenFrame(rx, ry, rw, rh);
  stationFrame.drawScreen();

  stationExitBtn = new ExitButton(rx+rw/2-30, ry-rh/2,30,30);
  stationExitBtn.drawExitButton();
}